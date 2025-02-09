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
	
	#callbackEvents() {
		if (this.active && this.x > this.scene.scale.width) {
			this.#setLive(false);
			console.log('deactivate fire');
		}
	}
	
	#setLive(status) {
		this.body.enabled = status; // off \ on
		this.setVisible(status); // hide \ show
		this.setActive(status); // stop track
	}
	
	#initial() {
		this.scene.add.existing(this);
		this.scene.events.on('update', this.#callbackEvents, this);
	}
	
	move() {
		this.body.setVelocityX(this.#fireConfig.velocity);
	}
	
	reset() {
		this.x = this.unit.x + this.unit.x / 2;
		this.y = this.unit.y;
		this.#setLive(true);
		console.log('reset fire');
	}
}