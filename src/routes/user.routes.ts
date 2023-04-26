import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createUserController,
  deleteUserController,
  updateUserController,
  userProfileController,
} from "../controllers/user";
import { listUserCarsController } from "../controllers/car";
import {
  userCreateRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user";
import { resetPasswordUserController } from "../controllers/user/resetPasswordUser.controller";

const userRoutes = Router();

userRoutes.post(
  "",
  bodyValidator(userCreateRequestSchema),
  createUserController
);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController);
userRoutes.get("/cars", validateTokenMiddleware, listUserCarsController);

userRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(userUpdateRequestSchema),
  updateUserController
);

userRoutes.delete("", validateTokenMiddleware, deleteUserController);
userRoutes.post("/reset-password", resetPasswordUserController);

export default userRoutes;
