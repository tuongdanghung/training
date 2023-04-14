import db from '../models'


export const getOneUser = (userId) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id: userId },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
                // khong lay password
            },
            include: [
                {
                    model: db.Role,
                    as: 'roleData',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                        // khong lay password
                    }
                }
            ],
            include: [
                {
                    model: db.Address,
                    as: 'addressData',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                        // khong lay password
                    }
                }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? "got" : "User not found",
            userData: response
        })
    } catch (error) {
        reject(error)
    }
})
export const updateUser = ({ userId, ...body }, add) => new Promise(async (resolve, reject) => {
    const userCredentials = {
        ...(body.name && { name: body.name }),
        ...(body.email && { email: body.email }),
        ...(body.avatar && { avatar: body.avatar }),
        ...(body.password && { avatar: body.avatar }),
    };

    const addressCredentials = {
        ...(body.city && { city: body.city }),
        ...(body.street && { street: body.street }),
        ...(body.nation && { nation: body.nation }),
    };
    try {
        const response = await db.User.update(userCredentials, {
            where: {
                id: userId,
            }
        })
        await db.Address.update(addressCredentials, {
            where: {
                code: add,
            }
        })
        const data = await db.User.findOne({
            where: { id: userId },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
                // khong lay password
            },
            include: [
                {
                    model: db.Role,
                    as: 'roleData',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                        // khong lay password
                    }
                }
            ],
            include: [
                {
                    model: db.Address,
                    as: 'addressData',
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                        // khong lay password
                    }
                }
            ]
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated successfully` : "Can not updated user",
            userData: data
        })
    } catch (error) {
        reject(error)
    }
})
// UPDATE

export const deleteUser = ({ ...query }, add) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.destroy({
            where: {
                id: query.userIds,
            }
        })

        await db.Address.destroy({
            where: {
                code: add,
            }
        })

        resolve({
            err: response > 0 ? 0 : 1,
            mes: `Delete successfully`,
        })
    } catch (error) {
        reject(error)
    }
})

// DELETE