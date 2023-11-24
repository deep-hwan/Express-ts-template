import { Router } from "express";
import { signIn } from "../module/module.ts";

const router = Router();

router.post("/sign-in", signIn);

export default router;
