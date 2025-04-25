"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = exports.isFree = void 0;
const consts_js_1 = require("../lib/consts.js");
const utils_js_1 = require("../lib/utils.js");
const isFree = (nick, color) => {
    // Check values
    if (!nick || !color) {
        return { message: `Bad data` };
    }
    // Check nick
    if (consts_js_1.snakes.find((snake) => snake.nick === nick)) {
        return { message: `Choose other nick` };
    }
    // Check color
    if (consts_js_1.snakes.find((snake) => snake.color === color) ||
        consts_js_1.snakes.find((snake) => snake.color === consts_js_1.appleColor)) {
        return { message: `Choose other color` };
    }
    return { success: true };
};
exports.isFree = isFree;
const del = (snake) => {
    snake.socket.emit(`end`);
    for (let bodyElement of snake.body) {
        if (bodyElement != snake.head() && (0, utils_js_1.chance)(0.4)) {
            consts_js_1.apples.push(bodyElement);
        }
    }
    consts_js_1.snakes.splice(consts_js_1.snakes.indexOf(snake), 1);
};
class Snake {
    nick;
    color;
    direction;
    body;
    socket;
    constructor(nick, color, socket) {
        this.nick = nick;
        this.color = color;
        this.direction = (0, utils_js_1.randInt)(0, 4);
        const newBodyFragment = (0, utils_js_1.freePos)();
        this.body = [newBodyFragment, newBodyFragment, newBodyFragment];
        this.socket = socket;
        consts_js_1.snakes.push(this);
    }
    head() {
        return { ...this.body.at(-1) };
    }
    changeDirection(direction) {
        const { x, y } = this.head();
        const { body } = this;
        const { length } = body;
        const element = body[length - 2];
        const condition = (direction === 0 && element.y !== y + 1) ||
            (direction === 1 && element.x !== x + 1) ||
            (direction === 2 && element.y !== y - 1) ||
            (direction === 3 && element.x !== x - 1);
        if (condition)
            this.direction = direction;
    }
    collide({ x, y }) {
        if (x < 0 || x >= consts_js_1.boardSize || y < 0 || y >= consts_js_1.boardSize) {
            del(this);
            return true;
        }
        for (const { nick, body } of consts_js_1.snakes) {
            if (nick == this.nick)
                continue;
            for (const element of body) {
                if (x == element.x && y == element.y) {
                    del(this);
                    return true;
                }
            }
        }
    }
    move() {
        const newHead = this.head();
        switch (this.direction) {
            case 0:
                newHead.y += 1;
                break;
            case 1:
                newHead.x += 1;
                break;
            case 2:
                newHead.y -= 1;
                break;
            default:
                newHead.x -= 1;
        }
        if (this.collide(newHead))
            return;
        let condition = true;
        for (let i = 0; i < consts_js_1.apples.length; i++) {
            if (newHead.x === consts_js_1.apples[i].x && newHead.y === consts_js_1.apples[i].y) {
                consts_js_1.apples.splice(i, 1);
                condition = false;
                break;
            }
        }
        if (condition)
            this.body.shift();
        this.body.push(newHead);
    }
    sendData() {
        consts_js_1.board[0] = this.head();
        this.socket.emit(`board`, JSON.stringify(consts_js_1.board));
    }
}
exports.Snake = Snake;
