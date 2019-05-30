import { Router } from 'express'
import controllerHandler from '../../middlewares/controller'

const router = Router()

router.get('/', controllerHandler(() => ({ message: 'oi' })))

export default router
