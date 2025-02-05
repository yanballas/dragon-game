export class Unit extends Phaser.GameObjects.Sprite {
	scene;
	#velocity
	
	constructor(scene, x, y, texture, frame, velocity) {
		super(scene, x, y, texture, frame);
		this.scene = scene;
		this.#velocity = velocity;
		this._initial();
	}
	
	_initial() {
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.body.enable = true;
	}
	
	move() {
		console.log(this, 'Unit move')
	}
}