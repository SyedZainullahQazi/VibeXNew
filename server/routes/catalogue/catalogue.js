import express from "express";
import upload from "../../utils/multerUpload.js";
import addCatalogue from "../../controllers/catalogue/add.js";
import getCatalogue from "../../controllers/catalogue/get.js";
import deleteCatalogue from "../../controllers/catalogue/delete.js";
import likeCatalogue from "../../controllers/catalogue/like.js";
import getOneCatalogue from "../../controllers/catalogue/getOne.js";
import AddComment from "../../controllers/catalogue/addComment.js";

const router=express.Router();

router.post('/add',addCatalogue);
router.get('/get',getCatalogue);
router.get('/get/:catalogueId',getOneCatalogue);
router.delete('/delete/:id', deleteCatalogue);
router.post('/like',likeCatalogue);
router.post('/addComment',AddComment);

export default router;