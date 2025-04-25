"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocket = void 0;
const game_js_1 = require("./game/game.js");
const Snake_js_1 = require("./game/Snake.js");
const setSocket = (socket) => {
    let snake = null;
    socket.on(`new`, ({ nick, color }) => {
        const data = (0, Snake_js_1.isFree)(nick, color);
        if (data.success) {
            snake = (0, game_js_1.createSnake)(nick, color, socket);
        }
        socket.emit(`new`, data);
    });
    socket.on(`direction`, (direction) => {
        if (!snake)
            return;
        snake.changeDirection(direction);
    });
};
exports.setSocket = setSocket;
