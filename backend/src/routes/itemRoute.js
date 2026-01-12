import express from 'express';
import * as itemController from "../controllers/itemController.js";

const router = express.Router();

router.get('/notas', itemController.getItems);
router.post('/notas', itemController.createItem);
router.put('/notas/:id', itemController.updateItem);
router.delete('/notas/:id', itemController.deleteItem);
router.get('/notas/search', itemController.searchItem);

export default router;