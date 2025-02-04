export class StartScene extends Phaser.Scene {
	#backgroundName;
	#backgroundPath;
	#textOutput;
	
	constructor(sceneKey, backgroundName, backgroundPath) {
		super({key: sceneKey});
		this.#backgroundName = backgroundName;
		this.#backgroundPath = backgroundPath;
	}
	
	#createBackground() {
		this.add.tileSprite(this.scale.width / 2, this.scale.height / 2, this.scale.width, this.scale.height, this.#backgroundName);
	}
	
	#addText() {
		this.#textOutput = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Tap to start the game', {
			fontFamily: 'Raleway-Medium',
			fontSize: '38px',
			fill: '#ffd800'
		}).setOrigin(0.5, 0.5).setAlign('center');
	}
	
	#startGame() {
		this.input.on('pointerdown', () => {
			this.scene.start('gameScene');
		});
	}
	
	create() {
		console.log('game create');
		this.#createBackground();
		this.#addText();
		this.#startGame();
	}
}