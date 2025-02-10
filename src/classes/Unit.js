export class Unit extends Phaser.GameObjects.Sprite {
	scene;
	#velocity
	
	constructor(data) {
		super(data.scene, data.x, data.y, data.texture, data.frame);
		this.scene = data.scene;
		this.#velocity = data.velocity;
		this.initial();
	}

	callbackEvents() {
		console.log('callback event listener');
	}
	
	initial() {
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.body.enable = true;
		this.scene.events.on('update', this.callbackEvents, this);
	}
	
	setAlive(status) {
		this.body.enabled = status; // off \ on
		this.setVisible(status); // hide \ show
		this.setActive(status); // stop track
	}
	
	move() {
		console.log(this, 'Unit move')
	}
	
	get velocity() {
		return this.#velocity;
	}
}