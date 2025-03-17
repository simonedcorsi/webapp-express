import express from 'express'

const router = express.Router()

import {index, show } from '../controllers/movieController.js'

router.get( '/', index );

router.get( '/:id', show )

export default router