import Phaser from 'phaser';
import WebFont from 'webfontloader';
import TextButton from '../sprites/textButton';

export default class BootState extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#070e16';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }
  preload() {
    WebFont.load({
      google: {
        families: ['Bangers'],
      },
      active: this.fontsLoaded,
    });

    let text = this.add.text(
      this.world.centerX,
      this.world.centerY,
      'loading fonts',
      { font: '16px Arial', fill: '#dddddd', align: 'center' }
    );
    text.anchor.setTo(0.5, 0.5);
  }

  render() {
    if (this.fontsReady) {
      this.state.start('Splash');
    }
  }

  fontsLoaded() {
    this.fontsReady = true;
  }
}
