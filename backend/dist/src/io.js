"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const socket_io_1 = require("socket.io");
const setSocket_js_1 = require("./setSocket.js");
const consts_js_1 = require("./lib/consts.js");
const staticData = { boardSize: consts_js_1.boardSize, appleColor: consts_js_1.appleColor };
const io = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
        },
    });
    io.on(`connection`, (socket) => {
        (0, setSocket_js_1.setSocket)(socket);
        socket.emit(`static`, staticData);
    });
};
exports.io = io;
