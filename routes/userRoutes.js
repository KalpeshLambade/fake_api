// import express from "express";
// import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/fakeStore.js";

// const router = express.Router();


// router.get("/", getProducts);
// router.post("/addProduct", addProduct);
// router.put("/updateProduct", updateProduct);
// router.delete("/deleteProduct/:id", deleteProduct);



// export default router;

import express from 'express'
import { addProduct, delectProduct, getProducts, updateProducts } from '../controllers/fakeStore.js';

const router = express.Router();

router.get('/',getProducts);
router.get('/add', addProduct);
router.put('/update',updateProducts);
router.delete('/delete',delectProduct);


export default router;