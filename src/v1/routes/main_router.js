import { Router } from "express";
import { signIn } from "../module/module";

const router = Router();

router.post("/sign-in", signIn);

export default router;
