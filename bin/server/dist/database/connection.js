"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Member_1 = require("./models/Member");
var Product_1 = require("./models/Product");
var Sales_1 = require("./models/Sales");
var SalesItem_1 = require("./models/SalesItem");
var Stock_1 = require("./models/Stock");
var User_1 = require("./models/User");
var Vendor_1 = require("./models/Vendor");
var Init1692703581634_1 = require("./migration/Init1692703581634");
var Bill_1 = require("./models/Bill");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [Init1692703581634_1.Init1692703581634],
    entities: [Member_1.Member, Product_1.Product, Sales_1.Sales, SalesItem_1.SalesItem, Stock_1.Stock, User_1.User, Vendor_1.Vendor, Bill_1.Bill],
    logging: false,
    synchronize: true,
});
//# sourceMappingURL=connection.js.map