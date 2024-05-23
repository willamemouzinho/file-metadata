import path from 'node:path'
import cors from 'cors'
import multer from 'multer'
import express, { type Request, type Response } from 'express'

import { connectDB } from './lib/db'
import { saveFileMetadata } from './routes/save-file-metadata'

const app = express()

app.use(cors())
app.use('/public', express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../views/index.html'))
})

connectDB()

const upload = multer()
app.post('/api/fileanalyse', upload.single('upfile'), saveFileMetadata)

const PORT = 3333
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
