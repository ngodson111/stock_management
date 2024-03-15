"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importStar(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var validateToken_1 = __importDefault(require("../api/middlewares/validateToken"));
var errorHandler_1 = __importDefault(require("../utils/errorHandler"));
var winston_1 = __importDefault(require("./winston"));
var api_1 = __importDefault(require("../api"));
var buildExpressServer = function (app) {
    app.use((0, helmet_1.xssFilter)());
    app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
    app.use((0, cors_1.default)({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5501",
        ],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json({ limit: "50mb" }));
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    app.use("/assets/", express_1.default.static(path_1.default.join(process.env.ROOT, "../public/")));
    (0, api_1.default)(app);
    app.get("/v1/healthcheck", (0, validateToken_1.default)({ checkAdmin: true }), function (_, res, next) {
        res.status(200).send({ result: true });
    });
    app.get("/download/:folder/:file", function (req, res, next) {
        var _a = req.params, folder = _a.folder, file = _a.file;
        res.download(path_1.default.join(process.env.ROOT, "../public/", folder, file), file, function (err) {
            if (err) {
                res.status(500).send({
                    message: "Could not download the file. " + err,
                });
            }
        });
    });
    app.use((0, errorHandler_1.default)());
    var PORT = process.env.PORT || 9000;
    app.listen(PORT, function () { return winston_1.default.info("Server Starting: ".concat(PORT)); });
};
exports.default = buildExpressServer;
//# sourceMappingURL=express.js.map