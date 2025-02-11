import {Unit} from "./Unit";

export class Fire extends Phaser.GameObjects.Sprite {
	scene;
	#unit;
	#velocity;
	#fireConfig;
	
	constructor(data) {
		console.log('create fire');
		super(data.scene, data.x, data.y, data.texture);
		this.scene = data.scene;
		this.#unit = data.unit;
		this.#velocity = data.velocity;
		this.#fireConfig = Fire.generateAttr(this.scene, this.#unit);
		this.initial();
	}
	
	static generateAttr(scene, unit) {
		return {
			x: unit.x,
			y: unit.y,
			texture: unit.weapon.texture,
			velocity: unit.weapon.velocity,
		}
	}
	
	static generate(scene, unit) {
		const fireConfig = this.generateAttr(scene, unit);
		return new Fire({
			scene: scene,
			x: fireConfig.x,
			y: fireConfig.y,
			texture: fireConfig.texture,
			velocity: fireConfig.velocity,
			unit: unit
		});
	}
	
	initial() {
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.body.enable = true;
		this.scene.events.on('update', this.callbackEvents, this);
	}
	
	callbackEvents() {
		if (this.active && this.x > this.scene.scale.width) {
			Unit.setAlive(this, false)
			console.log('deactivate fire');
		}
	}
	
	move() {
		this.body.setVelocityX(this.#fireConfig.velocity);
	}
	
	reset() {
		this.x = this.#unit.x;
		this.y = this.#unit.y;
		Unit.setAlive(this, true)
		console.log('reset fire');
	}
}