"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var module_1 = require("../module/module");
var router = (0, express_1.Router)();
router.post("/sign-in", module_1.signIn);
exports.default = router;
//# sourceMappingURL=main_router.js.map