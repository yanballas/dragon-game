import hero from '/sprites/hero.png';
import heroJSON from '/sprites/hero.json?url';
import enemy from '/sprites/enemy.png';
import enemyJSON from '/sprites/enemy.json?url';

export class PreloadScene extends Phaser.Scene {
	
	constructor(sceneKey) {
		super({key: sceneKey});
	}
	
	preload() {
		console.log('preload preload');
		this.load.atlas("hero", hero, heroJSON)
		this.load.atlas("enemy", enemy, enemyJSON)
	}
	
	create() {
		console.log('preload create');
		this.scene.start('startScene');
	}
}