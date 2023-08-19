"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//module
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var body_parser_1 = __importDefault(require("body-parser"));
require("express-async-errors");
//db
var database_js_1 = require("./db/database.js");
//
var main_router_js_1 = __importDefault(require("./routes/v1/main_router.js"));
var app = (0, express_1.default)();
(0, database_js_1.connectDB)();
app.listen(8080, "0.0.0.0");
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use((0, express_fileupload_1.default)());
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use("/v1/main", main_router_js_1.default);
app.use(function (error, res) {
    console.error(error);
    res.sendStatus(500);
});
//# sourceMappingURL=app.js.map