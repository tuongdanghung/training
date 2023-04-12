import * as services from '../services'
import { interalServerError, badRequest } from '../middlewares/handleErrors'
import { bookIds, bookId, title, price, available, category_code, image, filename, description } from '../helpers/joi_schema'
import joi from 'joi'
const cloudinary = require('cloudinary').v2;
export const getBooks = async (req, res) => {
    try {
        const response = await services.getBooks(req.query)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// READ

export const createBooks = async (req, res) => {
    try {
        const fileData = req.file
        const { error } = joi.object({ title, price, available, category_code, image, description }).validate({ ...req.body, image: fileData?.path })
        if (error) {
            if (fileData) {
                cloudinary.uploader.destroy(fileData.filename)
            }
            return badRequest(error.details[0].message, res)
        }
        const response = await services.createBooks(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// CREATE

export const updateBooks = async (req, res) => {
    try {
        const fileData = req.file
        const { error } = joi.object({ bookId }).validate({ bookId: req.body.bookId })
        if (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.updateBooks(req.body, fileData)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}
// UPDATE

export const deleteBooks = async (req, res) => {
    try {
        const { error } = joi.object({ bookIds, filename }).validate(req.query)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.deleteBooks(req.query.bookIds, req.query.filename)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// DELETE