const express = require('express')
const router = express.Router();    
const productController = require('../controllers/product')
     
router.get("/", productController.fetchAll);
router.get("/form", productController.getAddproduct );
router.post("/form", productController.postAddProduct);

module.exports = router;