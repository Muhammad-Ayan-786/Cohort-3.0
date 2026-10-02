import { Router } from "express";
import {
  registerControler,
  loginController,
  refreshController,
  getMeController,
} from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";


const router = Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */
router.post("/register", registerValidator, registerControler);



/**
 * @POST /api/auth/login
 * @param req Express req
 * @param req.body = { email,password }
 * @response res.status = 200 (if successful)
 */
router.post("/login", loginValidator, loginController)



/**
 * @POST /api/auth/refresh
 * @param req Express req
 * @param req.cookie = cookie
 * @response res.status = 200 (if successful)
 */
router.post('/refresh', refreshController)



/**
 * @GET /api/auth/me
 * @param req Express req
 * @response res.status = 200 (if successful)
 */
router.get("/me", authenticate, getMeController)



export default router;