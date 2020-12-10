const { Phaser } = require("./phaser.min")

window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 640,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]

    }
}