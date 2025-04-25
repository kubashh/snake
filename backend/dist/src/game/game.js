"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.createSnake = void 0;
const consts_js_1 = require("../lib/consts.js");
const utils_js_1 = require("../lib/utils.js");
const Snake_js_1 = require("./Snake.js");
const update = () => {
    (0, utils_js_1.clearBoard)();
    // Snakes move
    for (const snake of consts_js_1.snakes) {
        snake.move();
    }
    (0, utils_js_1.generateApple)();
    for (const { x, y } of consts_js_1.apples) {
        consts_js_1.board.push([x, y]);
    }
    for (const { body, color } of consts_js_1.snakes) {
        consts_js_1.board.push(color);
        for (const { x, y } of body) {
            consts_js_1.board.push([x, y]);
        }
    }
    // Send board
    for (const snake of consts_js_1.snakes) {
        snake.sendData();
    }
};
const createSnake = (nick, color, socket) => {
    return new Snake_js_1.Snake(nick, color, socket);
};
exports.createSnake = createSnake;
const fps = 1000 / 8;
const start = () => {
    setInterval(update, fps);
};
exports.start = start;
/*
// start

const now = () => {
  return Date.now()
}

let timeLast = now()

export const start = () => {
  if(now() - timeLast > delay) {
    timeLast += delay
    console.time(`all`)
    update()
    console.timeEnd(`all`)
  }

  setTimeout(start, 1)
}*/
