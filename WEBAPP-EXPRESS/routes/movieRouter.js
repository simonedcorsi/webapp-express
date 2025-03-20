import express from 'express'

import upload from '../middlewares/multer.js'

const router = express.Router()

import {index, show, destroy, storeReview, store } from '../controllers/movieController.js'

router.get( '/', index );

router.get('/:id', show)

router.delete('/:id', destroy);

router.post('/:id/reviews', storeReview);

router.post( '/', upload.single('image'), store )

export default router