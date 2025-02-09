export class Fire extends Phaser.GameObjects.Sprite {
	scene;
	unit;
	#velocity;
	#fireConfig;
	
	constructor(scene, x, y, texture, velocity, unit) {
		console.log('create fire');
		super(scene, x, y, texture);
		this.scene = scene;
		this.#velocity = velocity;
		this.unit = unit;
		this.#fireConfig = Fire.generateAttr(this.scene, this.unit);
		this.#initial();
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
		console.log('generate fire')
		const fireConfig = this.generateAttr(scene, unit);
		return new Fire(scene, fireConfig.x, fireConfig.y, fireConfig.texture, fireConfig.velocity, unit);
	}
	
	#initial() {
		this.scene.add.existing(this);
	}
	
	move() {
		this.body.setVelocityX(this.#fireConfig.velocity);
	}
	
	reset() {

	}
}