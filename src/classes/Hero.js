import {Unit} from "./Unit.js";
import {Fires} from "./Fires";

export class Hero extends Unit {
	scene;
	#velocity;
	#fireCount;
	#maxFireCount = 10;
	timer;
	fires;
	
	constructor(data) {
		super(data);
		this.scene = data.scene;
		this.#velocity = data.velocity;
		this.setScale(0.10);
		this.#fireCount = 0;
		this.timer = this.scene.time.addEvent({
			delay: 1000,
			callback: this.callbackEventsFire,
			callbackScope: this,
			loop: true
		});
		this.initial();
	}
	
	callbackEventsFire() {
		if (this.#fireCount < this.#maxFireCount) this.fires.createFire(this)
		else this.timer.paused = true;
	}
	
	initial() {
		super.initial();
		this.fires = new Fires(this.scene);
		this.fires.createFire(this);
	}
	
	move() {
		this.body.setVelocity(0);
		if (this.scene.cursors.left.isDown) {
			this.body.setVelocityX(-this.#velocity)
		} else if (this.scene.cursors.right.isDown) {
			this.body.setVelocityX(this.#velocity)
		}
		
		if (this.scene.cursors.up.isDown) {
			this.body.setVelocityY(-this.#velocity)
		} else if (this.scene.cursors.down.isDown) {
			this.body.setVelocityY(this.#velocity)
		}
	}
}