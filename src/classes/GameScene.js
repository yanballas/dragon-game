import {Hero} from "./Hero.js";

export class GameScene extends Phaser.Scene {
	#backgroundName;
	#backgroundPath;
	#background;
	#hero;
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
		this.#hero = new Hero(this, 150, 150, 'dragon')
	}
	
	update(time, delta) {
		this.#background.tilePositionX += 0.5;
		this.#hero.move();
	}
	
	get cursors() {
		return this.#cursors;
	}
}