let gameSettings = {
	playerSpeed: 200,
}

let config = {
	type: Phaser.AUTO,
	width: 256,
	height: 272,
	backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
}



window.onload = function() {
    let game = new Phaser.Game(config);
}