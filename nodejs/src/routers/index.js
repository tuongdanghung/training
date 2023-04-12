import user from './user'
import { notFound } from '../middlewares/handleErrors'
import auth from './auth'
import insert from './insert'
import books from './book'


const initRouters = (app) => {
    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/insert', insert)
    app.use('/api/v1/books', books)


    app.use(notFound)
}

module.exports = initRouters