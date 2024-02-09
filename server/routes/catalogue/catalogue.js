import express from "express";
import upload from "../../utils/multerUpload.js";
import addCatalogue from "../../controllers/catalogue/add.js";
import getCatalogue from "../../controllers/catalogue/get.js";
const router=express.Router();

router.post('/add',addCatalogue);
router.get('/get',getCatalogue);

export default router;