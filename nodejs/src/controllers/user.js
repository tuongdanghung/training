import * as services from '../services'
import { interalServerError } from '../middlewares/handleErrors'
import { userId, userIds, fileDel } from '../helpers/joi_schema'
import joi from 'joi'
export const getUser = async (req, res) => {
    try {
        const { id } = req.user
        const response = await services.getOneUser(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

export const updateUser = async (req, res) => {
    try {
        const add = req.user.address
        const { error } = joi.object({ userId }).validate({ userId: req.user.id })
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.updateUser(req.body, add)

        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// UPDATE

export const deleteUser = async (req, res) => {
    try {
        const add = req.user.address
        const { error } = joi.object({ userIds }).validate(req.query)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.deleteUser(req.query, add)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// DELETE