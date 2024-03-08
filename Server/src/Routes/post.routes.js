import {Router} from "express"
import {postData} from "../controllers/post.controller.js"


const router = Router();

router.route("/userdata").get(postData);


export default router




