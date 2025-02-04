import dragon from '/sprites/dragon.png';
import dragonJSON from '/sprites/dragon.json?url';

export class PreloadScene extends Phaser.Scene {
	
	constructor(sceneKey) {
		super({key: sceneKey});
	}
	
	preload() {
		console.log('preload preload');
		this.load.atlas("dragon", dragon, dragonJSON)
	}
	
	create() {
		console.log('preload create');
		this.scene.start('startScene');
	}
}