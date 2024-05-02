class Scene1 extends Phaser.Scene{
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "Assets/images/background.png");
        this.load.image("ship", "Assets/images/ship.png");
        this.load.image("ship2", "Assets/images/ship2.png");
        this.load.image("ship3", "Assets/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}



