import { Router } from "express";
import { dialogGpt, getUseModel } from "../controllers/gtp";

const router = Router();

router.get("/", getUseModel);
router.post("/", dialogGpt);

export default router;
