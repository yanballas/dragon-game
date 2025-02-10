import {Enemy} from "./Enemy.js";

export class Enemies extends Phaser.Physics.Arcade.Group {
	
	scene;
	maxEnemiesCount;
	createdEnemiesCount;
	timer;
	
	constructor(scene, maxEnemiesCount) {
		super();
		this.scene = scene;
		this.maxEnemiesCount = maxEnemiesCount;
		this.createdEnemiesCount = 0;
		this.timer = this.scene.time.addEvent({
			delay: 1000,
			callback: this.#callbackEventsEnemies,
			callbackScope: this,
			loop: true
		});
		this.timer.paused = true;
	}
	
	#callbackEventsEnemies() {
		if (this.createdEnemiesCount < this.maxEnemiesCount) this.#createEntity()
		else this.timer.paused = true;
	}
	
	#createEntity() {
		let enemy = null;
		
		if (!this.getFirstDead()) {
			enemy = Enemy.generate(this.scene);
			this.add(enemy);
		} else {
			enemy = this.getFirstDead();
			enemy.reset();
		}
		enemy.move();
		this.createdEnemiesCount++;
	}
	
	spawnEnemies() {
		console.log('timer active');
		this.timer.paused = false;
	}
}