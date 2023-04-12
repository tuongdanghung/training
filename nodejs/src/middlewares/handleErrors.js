import createError from 'http-errors'

export const badRequest = (err, res) => {
    const error = createError.BadRequest(err)
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}

export const interalServerError = (res) => {
    const error = createError.InternalServerError()
    return res.status(error.status).json({
        err: -1,
        mes: error.message
    })
}

export const notFound = (req, res) => {
    const error = createError.NotFound('api khong ton tai')
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}

export const notAuth = (err, res, isExprired) => {
    const error = createError.Unauthorized(err)
    return res.status(error.status).json({
        err: isExprired ? 2 : 1,
        mes: error.message
    })
}