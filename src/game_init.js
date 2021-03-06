import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';
import GameoverState from './states/Gameover';
import config from './config';

export default class Game extends Phaser.Game {
    constructor() {
        super(config.gameWidth, config.gameHeight, Phaser.CANVAS, 'game', null);

        this.state.add('Boot', BootState, false);
        this.state.add('Splash', SplashState, false);
        this.state.add('Game', GameState, false);
        this.state.add('Gameover', GameoverState, false);

        this.state.start('Boot');
    }
}
