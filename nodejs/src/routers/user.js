import * as controllers from '../controllers'
import express from 'express';
import verifyToken from '../middlewares/verify_token';
import { isAdmin, isCreatorOrAdmin } from '../middlewares/verify_role'
const router = express.Router();


router.use(verifyToken)
// router.use(isModeratorOrAdmin)
router.get('/', controllers.getUser)

router.put('/', controllers.updateUser)


router.use(isCreatorOrAdmin)

router.delete('/', controllers.deleteUser)

module.exports = router