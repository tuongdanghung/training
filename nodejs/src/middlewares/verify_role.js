
// xác minh token cũng là xác minh user

import { notAuth } from './handleErrors'

export const isAdmin = (req, res, next) => {
    // check xem account có phải admin hay không
    const { role_code } = req.user
    if (role_code !== "R1") return notAuth('Require role Admin', res)
    next()
}

export const isCreatorOrAdmin = (req, res, next) => {
    // check xem account có phải admin hay không
    const { role_code } = req.user
    if (role_code !== "R1" && role_code !== "R2") return notAuth('Require role Creator or Admin', res)
    next()
}