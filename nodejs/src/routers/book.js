import * as controllers from '../controllers'
import express from 'express';
import { isAdmin, isCreatorOrAdmin } from '../middlewares/verify_role'
import verifyToken from '../middlewares/verify_token';
import uploadCloud from '../middlewares/uploader';
const router = express.Router();



router.get('/', controllers.getBooks)

router.use(verifyToken)

router.use(isCreatorOrAdmin)

router.post('/', uploadCloud.single('image'), controllers.createBooks)

router.put('/', uploadCloud.single('image'), controllers.updateBooks)

router.delete('/', controllers.deleteBooks)

module.exports = router