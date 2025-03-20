import express from "express";

const router = express.Router();

router.get("/", (req, res)=> {
    res.render("index", {title:" Express-Node Examples", message: "View rendered using pug template."});
})

export default router;