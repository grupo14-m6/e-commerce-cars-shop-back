import { Router } from "express";

import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import { commentRequestSchema } from "../schemas/comments";
import {
  createCommentController,
  deleteCommentController,
  editCommentController,
  listCommentController,
} from "../controllers/comments";

const commentsRoutes = Router();

commentsRoutes.post(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(commentRequestSchema),
  createCommentController
);

commentsRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(commentRequestSchema),
  editCommentController
);

commentsRoutes.get("/:id", listCommentController);

commentsRoutes.delete("/:id",validateTokenMiddleware, deleteCommentController)

export default commentsRoutes;
