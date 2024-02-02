import express from "express";
const router=express.Router();

import getUserController from "../../controllers/generals/getUser.js";

router.get("/getUser",getUserController);

export default router;