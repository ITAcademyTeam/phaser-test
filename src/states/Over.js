import Phaser from 'phaser';
import TextButton from '../sprites/textButton';

export default class OverState extends Phaser.State {
  init() {}

  preload() {}

  create() {
    this.start = new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'button',
    });

    this.add.existing(this.start);

    this.start.onInputDown.add(() => {
      this.state.start('Game');
    });

    function up() {
      console.log(10);
      this.state.start('Game');
    }
  }
}