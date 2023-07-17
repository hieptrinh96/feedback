import { Router } from "express";
import * as profileCtrl from '../../controllers/auth.js'
// import { checkAuth } from "../auth/passport.js";
const router = Router()

router.get('/', profileCtrl.showUser)

export { router }