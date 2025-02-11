import {Unit} from "./Unit.js";

export class Enemy extends Unit {
	scene;
	#velocity;
	#enemyConfig;
	
	constructor(data) {
		super(data);
		this.scene = data.scene;
		this.#velocity = data.velocity;
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
			velocity: -250,
		};
		return new Enemy({
			scene: scene,
			x: currentEnemyConfig.x,
			y: currentEnemyConfig.y,
			texture: currentEnemyConfig.texture,
			frame: currentEnemyConfig.frame,
			velocity: currentEnemyConfig.velocity,
			weapon: {
				delay: 1000,
				texture: 'bullet-enemy',
				velocity: -500,
			},
			origin: {
				x: 0,
				y: 0.5,
			}
		});
	}
	
	callbackEvents() {
		if (this.active && this.x < -this.width) {
			Unit.setAlive(this, false)
			console.log('deactivate enemy');
		}
	}
	
	reset() {
		this.x = this.#enemyConfig.x;
		this.y = this.#enemyConfig.y;
		this.setFrame(this.#enemyConfig.frame);
		Unit.setAlive(this, true)
		console.log('reset enemy');
	}
	
	move() {
		this.initial();
		this.body.setVelocityX(this.#velocity);
	}
}