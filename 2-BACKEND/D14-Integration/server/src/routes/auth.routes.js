import { Router } from 'express'
import {
  meController,
  refreshController,
  registerController
} from '../controller/auth.controller.js'

const router = Router()

/**
 * @POST /api/auth/register
 */
router.post('/register', registerController)


/**
 * @GET /api/auth/me
 */
router.get('/me', meController)


/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", refreshController)


export default router