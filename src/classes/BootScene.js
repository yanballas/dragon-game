export class BootScene extends Phaser.Scene {
	#backgroundName;
	#backgroundPath;
	
	constructor(sceneKey, backgroundName, backgroundPath) {
		super({key: sceneKey});
		this.#backgroundName = backgroundName;
		this.#backgroundPath = backgroundPath;
	}
	
	preload() {
		console.log('boot preload');
		this.load.image(this.#backgroundName, this.#backgroundPath);
	}
	
	create() {
		console.log('boot create');
		this.scene.start('preloadScene');
	}
}