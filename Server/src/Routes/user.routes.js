import {Router} from "express"


const router=Router();


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)







export default router