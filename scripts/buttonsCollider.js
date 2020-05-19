function buttonsCollider(tank, btn, btnString, blockString, that) {
    let btnActive = that.physics.add.sprite(btn.x, btn.y, btnString);
    btnActive.depth = -1;
    btn.destroy();
    walls.getChildren().forEach((wall) => {
        if (wall.texture.key.includes(blockString)) wall.destroy();
    });
}
