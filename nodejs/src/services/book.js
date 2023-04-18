import db from '../models'
import { Op } from 'sequelize'
import { v4 as generateId } from 'uuid'
const cloudinary = require('cloudinary').v2;
export const getBooks = ({ page, limit, order, name, price, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        const offset = (!page || +page <= 1) ? 0 : (+ page - 1)
        const flimit = +limit || +process.env.LIMIT_BOOK
        queries.offset = offset * flimit
        queries.limit = flimit
        if (order) {
            queries.order = [order]
        }
        if (name) {
            query.title = { [Op.substring]: name }
        }
        if (available) {
            query.available = { [Op.between]: available }
        }

        if (price) {
            query.price = { [Op.between]: price }
        }
        const response = await db.Book.findAndCountAll({
            where: query,
            ...queries,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'category_code']
                // khong lay password
            },
            include: [
                {
                    model: db.Category,
                    as: 'categoryData',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                        // khong lay password
                    }
                },
                // {
                // mỗi object có thể lấy một bảng liên kết trong DB
                // }
            ]

        })

        resolve({
            err: response ? 0 : 1,
            mes: response ? "successfully" : "Email đã được sử dụng",
            bookData: response
        })
    } catch (error) {
        reject(error)
    }
})

// READ


export const createBooks = (body, fileData) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Book.findOrCreate({
            where: { title: body?.title },
            defaults: {
                ...body,
                id: generateId(),
                image: fileData?.path,
                filename: fileData?.filename
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? "Created successfully" : "Can not create new book",
            bookData: response[1]
        })
        if (fileData && !response[1]) {
            cloudinary.uploader.destroy(fileData.filename)
        }
    } catch (error) {
        reject(error)
        if (fileData && !response[1]) {
            cloudinary.uploader.destroy(fileData.filename)
        }
    }
})
// CREATE

export const updateBooks = ({ bookId, ...body }, fileData) => new Promise(async (resolve, reject) => {
    try {
        if (fileData) {
            body.image = fileData?.path
        }
        const response = await db.Book.update(body, {
            where: {
                id: bookId,
            }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated successfully` : "Can not updated book",
            bookData: response[0]
        })
        if (fileData && !response[0] === 0) {
            cloudinary.uploader.destroy(fileData.filename)
        }
    } catch (error) {
        reject(error)
        if (fileData && !response[1]) {
            cloudinary.uploader.destroy(fileData.filename)
        }
    }
})
// UPDATE

export const deleteBooks = (bookIds, filename) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Book.destroy({
            where: {
                id: bookIds,
            }
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: `Delete successfully`,
        })
        cloudinary.api.delete_resources(filename)
    } catch (error) {
        reject(error)
    }
})
// DELETE

export const getOneBook = (id) => new Promise(async (resolve, reject) => {
    try {

        const queries = { raw: true, nest: true }
        const response = await db.Book.findAndCountAll({

            where: { id: id },
            ...queries,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'filename']
                // khong lay password
            }
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? "successfully" : "Sách không tồn tại",
            book: response
        })
    } catch (error) {
        reject(error)
    }
})