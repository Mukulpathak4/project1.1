const express = require("express");

const productController = require("../controllers/products");

const router = express.Router();

router.get('/add-Product',productController.getAddProduct);

router.get('/contactUs',productController.getContactUs);

router.post('/success',productController.postSuccess);

router.post('/add-product',productController.postAddProduct);

module.exports = router;