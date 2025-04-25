"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearBoard = exports.generateApple = exports.freePos = exports.chance = exports.randInt = void 0;
const consts_js_1 = require("./consts.js");
const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
exports.randInt = randInt;
const chance = (a) => Math.random() < a;
exports.chance = chance;
const freePos = (a = 0) => {
    let pos = { x: (0, exports.randInt)(a, consts_js_1.boardSize - a), y: (0, exports.randInt)(a, consts_js_1.boardSize - a) };
    let b = true;
    while (b) {
        b = false;
        for (const { body } of consts_js_1.snakes) {
            for (const { x, y } of body) {
                if (pos.x == x && pos.y == y) {
                    pos = {
                        x: (0, exports.randInt)(a, consts_js_1.boardSize - a),
                        y: (0, exports.randInt)(a, consts_js_1.boardSize - a),
                    };
                    b = true;
                }
            }
        }
        for (const { x, y } of consts_js_1.apples) {
            if (pos.x == x && pos.y == y) {
                pos = { x: (0, exports.randInt)(a, consts_js_1.boardSize - a), y: (0, exports.randInt)(a, consts_js_1.boardSize - a) };
                b = true;
            }
        }
    }
    return pos;
};
exports.freePos = freePos;
const generateApple = () => {
    if ((0, exports.chance)(0.06)) {
        if (consts_js_1.apples.length < consts_js_1.boardSize / 6) {
            consts_js_1.apples.push((0, exports.freePos)(2));
        }
    }
};
exports.generateApple = generateApple;
const clearBoard = () => {
    consts_js_1.board.length = 1;
};
exports.clearBoard = clearBoard;
