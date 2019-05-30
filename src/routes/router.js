import { Router } from 'express'
import example from '../modules/example/router'

const router = Router()

router.use('/example', example)

export default router
