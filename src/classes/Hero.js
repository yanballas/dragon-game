export class Hero extends Phaser.GameObjects.Sprite {
	scene;
	#velocity;
	
	constructor(scene, x, y, texture) {
		super(scene, x, y, texture, `${texture}-1.png`);
		this.setScale(0.10);
		this.scene = scene;
		this.#initialHero();
	}
	
	#initialHero() {
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.body.enable = true;
		this.#velocity = 500;
	}
	
	move() {
		this.body.setVelocity(0);
		// switch (true) {
		// 	case this.scene.cursors.left.isDown: {
		// 		console.log('left');
		// 		this.body.setVelocityX(-500)
		// 		break;
		// 	}
		// 	case this.scene.cursors.right.isDown: {
		// 		console.log('right');
		// 		this.body.setVelocityX(500)
		// 		break;
		// 	}
		// 	case this.scene.cursors.up.isDown: {
		// 		console.log('up');
		// 		this.body.setVelocityY(-500)
		// 		break;
		// 	}
		// 	case this.scene.cursors.down.isDown: {
		// 		console.log('down');
		// 		this.body.setVelocityY(500)
		// 		break;
		// 	}
		// }
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