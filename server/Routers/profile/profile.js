import { Router } from "express";
import * as profileCtrl from '../../controllers/profile.js'
import { checkAuth } from "../../controllers/auth.js";

const router = Router()

router.get('/', checkAuth, profileCtrl.showUser)
router.post('/userChecker', profileCtrl.userChecker)
// router.post('/teamCheck', profileCtrl.teamChecker)

export { router }