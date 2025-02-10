import {Unit} from "./Unit";

export class Fire extends Unit {
	scene;
	unit;
	velocity;
	fireConfig;
	
	constructor(data) {
		console.log('create fire');
		super(data);
		this.scene = data.scene;
		this.unit = data.unit;
		this.velocity = data.velocity;
		this.fireConfig = Fire.generateAttr(this.scene, this.unit);
		super.initial();
	}
	
	static generateAttr(scene, unit) {
		return {
			x: unit.x + unit.x / 2,
			y: unit.y,
			texture: 'fire-dragon',
			velocity: 300,
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
	
	callbackEvents() {
		if (this.active && this.x > this.scene.scale.width) {
			this.setAlive(false);
			console.log('deactivate fire');
		}
	}
	
	move() {
		this.body.setVelocityX(this.fireConfig.velocity);
	}
	
	reset() {
		this.x = this.unit.x + this.unit.x / 2;
		this.y = this.unit.y;
		this.setAlive(true);
		console.log('reset fire');
	}
}