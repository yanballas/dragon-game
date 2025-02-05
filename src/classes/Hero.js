import {Unit} from "./Unit.js";

export class Hero extends Unit {
	scene;
	#velocity;
	
	constructor(scene, x, y, texture, frame, velocity) {
		super(scene, x, y, texture, frame, velocity);
		this.scene = scene;
		this.#velocity = velocity;
		this.setScale(0.10);
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