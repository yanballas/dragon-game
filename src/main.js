import './style.css'
import background from '/sprites/background.png';

import Phaser from "phaser";
import {BootScene} from "./classes/BootScene.js";
import {PreloadScene} from "./classes/PreloadScene.js";
import {StartScene} from "./classes/StartScene.js";
import {GameScene} from "./classes/GameScene.js";

document.addEventListener('DOMContentLoaded', () => {
	const bootScene = new BootScene('bootScene', 'background-game', background);
	const preloadScene = new PreloadScene('preloadScene');
	const startScene = new StartScene('startScene', 'background-game', background);
	const gameScene = new GameScene('gameScene', 'background-game', background);
	const scenes = [bootScene, preloadScene, startScene, gameScene]
	const config = {
		type: Phaser.AUTO,
		width: 1280,
		height: 720,
		scene: scenes
	}
	
	const game = new Phaser.Game(config);
})
