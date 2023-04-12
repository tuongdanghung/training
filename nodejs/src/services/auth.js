import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const register = ({ name, email, password, street, city, nation }) => new Promise(async (resolve, reject) => {
    try {
        console.log(">>>>>", name + nation + city + street);
        const response = await db.User.findOrCreate({
            where: { email },
            defaults: {
                name: name,
                email: email,
                password: hashPassword(password),
                address: name + nation + city + street
            }
        })

        await db.Address.create({
            code: name + nation + city + street,
            city: city,
            street: street,
            nation: nation
        })

        const accessToken = response[1]
            ? jwt.sign({ id: response[0].id, email: response[0].email, role_code: response[0].role_code }, process.env.JWT_SECRET, { expiresIn: '5s' })
            : null
        // JWT_SECRET_REFRESH_TOKEN
        const refreshToken = response[1]
            ? jwt.sign({ id: response[0].id }, process.env.JWT_SECRET_REFRESH_TOKEN, { expiresIn: '15d' })
            : null
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Register is successfully' : 'Email is used',
            'access_token': accessToken ? `Bearer ${accessToken}` : accessToken,
            'refresh_token': refreshToken
        })
        if (refreshToken) {
            await db.User.update({
                refresh_token: refreshToken
            }, {
                where: { id: response[0].id }
            })
        }
    } catch (error) {
        reject(error)
    }
})
// register

export const login = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { email: email },
            raw: true
        })

        const isChecked = response && bcrypt.compareSync(password, response.password)
        const accessToken = isChecked
            ? jwt.sign({
                id: response.id,
                name: response.name,
                email: response.email,
                role_code: response.role_code,
                address: response.address
            }, process.env.JWT_SECRET, { expiresIn: '5d' })
            : null
        const refresh_token = isChecked
            ? jwt.sign({
                id: response.id,
            },
                process.env.JWT_SECRET_REFRESH_TOKEN,
                { expiresIn: '10d' }) : null
        resolve({
            err: accessToken ? 0 : 1,
            mes: accessToken ? 'Login is successfully' : response ? 'Password is wrong' : 'Email has been registered',
            'access_token': accessToken ? `Bearer ${accessToken}` : accessToken,
            'refresh_token': refresh_token ? `Bearer ${refresh_token}` : refresh_token,
        })
        if (refresh_token) {
            await db.User.update({
                refresh_token: refresh_token
            },
                {
                    where: { id: response.id }
                })
        }
    } catch (error) {
        reject(error)
    }
})

// login

export const refreshToken = (refresh_token) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { refresh_token }
        })
        if (response) {
            jwt.verify(refresh_token, process.env.JWT_SECRET_REFRESH_TOKEN, (err) => {
                if (err) {
                    resolve({
                        err: 1,
                        mess: "sai roofi"
                    })
                } else {
                    const accessToken = jwt.sign({ id: response.id, email: response.email, role_code: response.role_code }, process.env.JWT_SECRET, { expiresIn: '30d' })
                    resolve({
                        err: accessToken ? 0 : 1,
                        mes: accessToken ? 'OK' : 'Fail to generate new access token. Let try more time',
                        'access_token': accessToken ? `Bearer ${accessToken}` : accessToken,
                        'refresh_token': refresh_token
                    })
                }
            })
        }
    } catch (error) {
        reject(error)
    }
})

// refresh token

// từ đây đi tới controllers