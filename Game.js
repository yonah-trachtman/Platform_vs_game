let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: 0x000000,
    scene: [Scene1, Scene2]
}



window.onload = function() {
    let game = new Phaser.Game(config);
}