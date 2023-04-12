import * as services from '../services'
import { interalServerError, badRequest } from '../middlewares/handleErrors'
import { name, email, password, refresh_token, street, city, nation } from '../helpers/joi_schema'
import joi from 'joi'
export const register = async (req, res) => {
    try {
        console.log(">>>>> body ", req.body);
        const { error } = joi.object({ name, email, password, street, city, nation }).validate(req.body)
        if (error) return badRequest(error.details[0]?.message, res)
        const response = await services.register(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}

//  register

export const login = async (req, res) => {
    try {
        const { error } = joi.object({ email, password }).validate(req.body)

        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.login(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// login

export const refreshToken = async (req, res) => {
    try {
        const { error } = joi.object({ refresh_token }).validate(req.body)
        if (error) return badRequest(error.details[0]?.message, res)
        const response = await services.refreshToken(req.body.refreshToken)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}

// refesh_token


// từ đây đi tới router