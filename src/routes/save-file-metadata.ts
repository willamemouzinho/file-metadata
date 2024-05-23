import type { Request, Response } from 'express'
import type { Types } from 'mongoose'
import { FileMetadata } from '../models/file-metadata'

export const saveFileMetadata = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		console.log(req.file);
		const uploadedFile = req.file

		// return res.status(200).json({})
		 return res.status(200).json({
		 	name: uploadedFile.originalname,
		 	type: uploadedFile.mimetype,
		 	size: uploadedFile.size
		 })
	} catch (error) {
		console.error(error)
		// return res.status(500).json(error)
		return res.status(500).json({ message: 'internal server error.' })
	}
}
