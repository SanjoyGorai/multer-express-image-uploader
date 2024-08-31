import { Router } from "express";
import upload from "../config/multerConfig.js";
import {
  uploadMultipleFiles,
  uploadSingleFile,
} from "../controllers/uploadController.js";

const router = Router();

router.post("/upload-single", upload.single("image"), uploadSingleFile);
router.post("/upload-multiple", upload.single("images"), uploadMultipleFiles);

export default router;
