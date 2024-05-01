const {Router}= require("express");
const movie= require("../controllers/MovieController.js");
const router = Router();


router.get("/", movie.moviecontroller);
router.post("/movies",movie.creationController);




module.exports=router;