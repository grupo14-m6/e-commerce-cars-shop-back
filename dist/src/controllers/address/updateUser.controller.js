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
exports.updateAddressController = void 0;
const address_1 = require("../../services/address");
const updateAddressController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, address_1.updateAddressService)(req.id, req.body);
    return res.json(data);
});
exports.updateAddressController = updateAddressController;
//# sourceMappingURL=updateUser.controller.js.map