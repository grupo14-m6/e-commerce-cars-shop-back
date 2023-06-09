"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_1 = require("../controllers/car");
const middlewares_1 = require("../middlewares");
const Brand_1 = require("../controllers/Brand");
const car_2 = require("../schemas/car");
const carRoutes = (0, express_1.Router)();
carRoutes.post("", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(car_2.carCreateSchema), middlewares_1.verifyGoodDealMiddleware, car_1.createCarController);
carRoutes.get("", car_1.getCarsController);
carRoutes.get("/brands", Brand_1.listBrandsController);
carRoutes.get("/:id", car_1.getSpecificCarController);
carRoutes.patch("/:id", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(car_2.carUpdateSchema), middlewares_1.verifyGoodDealMiddleware, car_1.updateCarController);
carRoutes.delete("/:id", middlewares_1.isAvalidUUID, middlewares_1.validateTokenMiddleware, car_1.deleteCarController);
carRoutes.post("/image/:id", middlewares_1.isAvalidUUID, middlewares_1.validateTokenMiddleware, car_1.createCarImageController);
carRoutes.get("/image/:id", middlewares_1.isAvalidUUID, car_1.listCarImageController);
carRoutes.delete("/image/:id", middlewares_1.isAvalidUUID, middlewares_1.validateTokenMiddleware, car_1.deleteCarImageController);
exports.default = carRoutes;
//# sourceMappingURL=car.routes.js.map