import {Fire} from "./Fire.js";

export class Fires extends Phaser.Physics.Arcade.Group {
	
	scene;
	
	constructor(scene) {
		super(scene.physics.world, scene);
		this.scene = scene;
	}
	
	createFire(unit) {
		let fire = this.getFirstDead();
		if (!fire) {
			fire = Fire.generate(this.scene, unit);
			this.add(fire);
		} else fire.reset();
		
		fire.move();
	}
}