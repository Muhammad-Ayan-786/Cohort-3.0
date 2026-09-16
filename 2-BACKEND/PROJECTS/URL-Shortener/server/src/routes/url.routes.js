import { Router } from 'express'
import { createURL, deleteURL, getAllURLs } from '../controllers/url.controller.js'

const router = Router()

/**
 * @POST /api/urls
 * req.body = { url: "https://longurl.com" }
 */
router.post('/', createURL)


/**
 * @GET /api/urls
 */
router.get('/all', getAllURLs)


/**
 * @Delete /api/urls/:id
 */
router.delete('/:id', deleteURL)



export default router