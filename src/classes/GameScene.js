import {Hero} from "./Hero.js";
import {Enemies} from "./Enemies.js";

export class GameScene extends Phaser.Scene {
	#backgroundName;
	#backgroundPath;
	#background;
	#hero;
	#enemies;
	#cursors;
	
	constructor(sceneKey, backgroundName, backgroundPath) {
		super({key: sceneKey});
		this.#backgroundName = backgroundName;
		this.#backgroundPath = backgroundPath;
	}
	
	#createBackground() {
		this.#background = this.add.tileSprite(this.scale.width / 2, this.scale.height / 2, this.scale.width, this.scale.height, this.#backgroundName);
	}
	
	init() {
		this.#cursors = this.input.keyboard.createCursorKeys();
	}
	
	create() {
		console.log('Starting!');
		this.#createBackground();
		this.#hero = new Hero({
			scene: this,
			x: 150,
			y: this.scale.height / 2,
			texture: 'hero',
			frame: 'hero-1.png',
			velocity: 500,
			weapon: {
				delay: 500,
				texture: 'fire-dragon',
				velocity: 750,
			},
			origin: {
				x: 1,
				y: 0.5,
			}
		});
		this.#enemies = new Enemies(this, 10);
		this.#enemies.spawnEnemies();
	}
	
	update(time, delta) {
		this.#background.tilePositionX += 0.5;
		this.#hero.move();
	}
	
	get cursors() {
		return this.#cursors;
	}
}