import {Fires} from "./Fires";

export class Unit extends Phaser.GameObjects.Sprite {
	#scene;
	#velocity
	#fireCount;
	#maxFireCount = 10;
	#timer;
	weapon;
	#origin;
	
	constructor(data) {
		super(data.scene, data.x, data.y, data.texture, data.frame);
		this.#scene = data.scene;
		this.#velocity = data.velocity;
		this.#fireCount = 0;
		this.weapon = data.weapon;
		this.#origin = data.origin;
		this.initial();
	}
	
	static setAlive(sprite, status) {
		sprite.body.enabled = status; // off \ on
		sprite.setVisible(status); // hide \ show
		sprite.setActive(status); // stop track
	}

	callbackEvents() {
		console.log('callback event listener');
	}
	
	callbackEventsFire() {
		if (this.#fireCount < this.#maxFireCount) this.updateFires();
		else this.#timer.paused = true;
	}
	
	initial() {
		this.#scene.add.existing(this);
		this.#scene.physics.add.existing(this);
		this.body.enable = true;
		this.scene.events.on('update', this.callbackEvents, this);
		this.setOrigin(this.#origin.x, this.#origin.y);
		
		this.#timer = this.scene.time.addEvent({
			delay: this.weapon.delay,
			callback: this.callbackEventsFire,
			callbackScope: this,
			loop: true
		});
		
		this.fires = new Fires(this.scene);
		this.updateFires();
	}
	
	updateFires() {
		this.fires.createFire(this)
	}
	
	move() {
		console.log(this, 'Unit move')
	}
	
	get velocity() {
		return this.#velocity;
	}
}