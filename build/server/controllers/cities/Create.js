"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const http_status_codes_1 = require("http-status-codes");
const create = (req, res) => {
    if (req.body.name === undefined) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send("Informe o nome!");
    }
    console.log(req.body.name);
    return res.send("Create");
};
exports.create = create;
