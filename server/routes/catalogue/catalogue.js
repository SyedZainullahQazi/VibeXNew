import express from "express";
import upload from "../../utils/multerUpload.js";
import addCatalogue from "../../controllers/catalogue/add.js";
const router=express.Router();

router.post('/add',addCatalogue);

export default router;