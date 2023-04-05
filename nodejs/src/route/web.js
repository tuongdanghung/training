import express from 'express';
import homController from '../controller/homController';
let router = express.Router();

const initWebRoute = (app) => {
    // app.METHOD(PATH, HANDLER)
    router.get('/', homController.getHomePage)
    router.get('/detail/user/:id', homController.getDetailPage)
    router.post('/create', homController.createPage)
    router.post('/delete', homController.deletePage)
    router.get('/edit/:id', homController.getEditPage)
    router.post('/update', homController.updatePage)
    return app.use('/', router)
}

export default initWebRoute