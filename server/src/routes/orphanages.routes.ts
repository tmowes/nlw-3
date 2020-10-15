import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import OrphanagesController from '../controllers/OrphanagesController'

const orphanagesRouter = Router()
const upload = multer(uploadConfig)

orphanagesRouter.get('/', OrphanagesController.index)

orphanagesRouter.get('/:id', OrphanagesController.show)

orphanagesRouter.post('/', upload.array('images'), OrphanagesController.create)

export default orphanagesRouter
