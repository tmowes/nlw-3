import path from 'path'
import crypto from 'crypto'
import multer from 'multer'

const uploadsFolder = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  directory: uploadsFolder,
  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename(_, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`
      return callback(null, fileName)
    },
  }),
}
