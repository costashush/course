class Drawable {
    constructor(name, target) {
        this.name = name;
        this.target = target;
        this.isHighlighted = false;

    }
    draw() {
        var gameArray = [];

        gameArray.push(new)


    }

}

class Board extends Drawable {
    constructor(name, target) {
        super(name, target);
    }

}
class MassegeBoard extends Drawable {
    constructor(name, target) {
        super(name, target);
    }

}
class BattleShip extends Drawable {
    constructor(name, target) {
        super(name, target);
        this.life = life;
    }
    getDamageRate() {


    }
    tryHit(x, y) {

    }
}

class simpleBattle extends BattleShip {
    constructor(name, target, life) {
        super(name, target, life);
    }

}

class goldenBattle extends BattleShip {
    constructor(name, target, life) {
        super(name, target, life);
    }
}