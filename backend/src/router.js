const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routers
const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const manufacturerRouter = require("./routers/manufacturerRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");

// Routes pour 'products'

router.use("/products", productRouter);

// Routes pour 'categories'

router.use("/categories", categoryRouter);

// Routes pour 'manufacturers'

router.use("/manufacturers", manufacturerRouter);

router.use("/user", userRouter);

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
