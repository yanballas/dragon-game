import {Unit} from "./Unit.js";

export class Enemy extends Unit {
	scene;
	#velocity;
	#enemyConfig;
	
	constructor(scene, x, y, texture, frame, velocity) {
		super(scene, x, y, texture, frame, velocity);
		this.scene = scene;
		this.#velocity = velocity;
		this.#enemyConfig = Enemy.generateAttr(this.scene);
	}
	
	static generateAttr(scene) {
		return {
			x: scene.scale.width + 150,
			y: Phaser.Math.Between(100, scene.scale.height - 100),
			frame: `enemy-${Phaser.Math.Between(1, 3)}.png`,
		}
	}
	
	static generate(scene) {
		const enemyConfig = this.generateAttr(scene);
		const currentEnemyConfig = {
			...enemyConfig,
			texture: 'enemy',
			velocity: -300,
		};
		return new Enemy(scene, currentEnemyConfig.x, currentEnemyConfig.y, currentEnemyConfig.texture, currentEnemyConfig.frame, currentEnemyConfig.velocity);
	}
	
	#setLive(status) {
		this.body.enabled = status; // off \ on
		this.setVisible(status); // hide \ show
		this.setActive(status); // stop track
	}
	
	#callbackEvents() {
		if (this.active && this.x < -this.width) {
			this.#setLive(false);
			console.log('deactivate enemy');
		}
	}
	
	#initial() {
		super._initial();
		this.scene.events.on('update', this.#callbackEvents, this);
	}
	
	reset() {
		this.x = this.#enemyConfig.x;
		this.y = this.#enemyConfig.y;
		this.setFrame(this.#enemyConfig.frame);
		this.#setLive(true);
		console.log('reset enemy');
	}
	
	move() {
		this.#initial();
		this.body.setVelocityX(this.#velocity);
	}
	
	get velocity() {
		return this.#velocity;
	}
}