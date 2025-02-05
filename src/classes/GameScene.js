import {Hero} from "./Hero.js";
import {Enemy} from "./Enemy.js";
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
		this.#hero = new Hero(this, 150, this.scale.height / 2, 'hero', 'hero-1.png', 500);
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