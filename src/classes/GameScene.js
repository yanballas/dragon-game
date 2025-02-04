export class GameScene extends Phaser.Scene {
	#backgroundName;
	#backgroundPath;
	
	constructor(sceneKey, backgroundName, backgroundPath) {
		super({key: sceneKey});
		this.#backgroundName = backgroundName;
		this.#backgroundPath = backgroundPath;
	}
	
	#createBackground() {
		this.add.image(this.scale.width / 2, this.scale.height / 2, this.#backgroundName);
	}
	
	create() {
		console.log('Starting!');
		this.#createBackground();
		this.add.sprite(150, this.scale.height / 2, 'dragon', 'dragon-1.png').setScale(0.15, 0.15);
	}
}