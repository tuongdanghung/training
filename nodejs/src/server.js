import initWebRoute from './route/web'
const express = require('express')
// import connection from './config/connectDB'
require('dotenv').config()
// import thư viện express
import configViewEngine from './config/viewEngine'
const app = express()

const port = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup view engine 
configViewEngine(app);

// init web router
initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})