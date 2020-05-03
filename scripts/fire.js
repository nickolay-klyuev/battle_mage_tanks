function fire(shooter, that, isEnemy = false) {
    let fireball = that.physics.add.image(shooter.x, shooter.y, "fireball");
    fireball.angle = shooter.angle;
    let fireDir = fireball.angle;
    if (fireDir == 0) fireball.setVelocityY(0 - fireSpeed);
    if (fireDir == 90) fireball.setVelocityX(fireSpeed);
    if (fireDir == -180) fireball.setVelocityY(fireSpeed);
    if (fireDir == -90) fireball.setVelocityX(0 - fireSpeed);

    that.physics.add.collider(fireball, walls, hitWall, null, that);
    function hitWall(fireball, wall) {
        fireball.destroy();
    }

    if (!isEnemy) {
        that.physics.add.collider(fireball, enemies, hitEnemy, null, that);
        function hitEnemy(fireball, enemy) {
            fireball.destroy();
            enemy.destroy();
        }
    } else {
        that.physics.add.collider(fireball, tank, () => {
            let randomDamage = Math.round(Math.random() * 5);
            if (Math.random() <= 0.5) randomDamage *= -1;
            hpValue -= simpleEnemy.damage + randomDamage;
            fireball.destroy();
        }, null, that);
    }
}
