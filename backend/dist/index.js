"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const io_1 = require("./src/io");
const game_1 = require("./src/game/game");
const port = 4000;
const server = (0, http_1.createServer)();
(0, io_1.io)(server);
server.listen(port, () => {
    console.log(`Snake on port ${port}...`);
});
(0, game_1.start)();
