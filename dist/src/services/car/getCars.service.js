"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarsService = void 0;
const car_1 = require("../../schemas/car");
const repositories_1 = require("../../utils/repositories");
const getCarsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield repositories_1.carRepo.find({
        relations: {
            user: true,
            images: true,
        },
    });
    const carsValidated = yield car_1.allCarsResponseSchema.validate(cars, {
        stripUnknown: true,
    });
    return carsValidated;
});
exports.getCarsService = getCarsService;
//# sourceMappingURL=getCars.service.js.map