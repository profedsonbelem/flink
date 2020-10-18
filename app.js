const express = require('express');
const bodyParser = require('body-parser');
const Utils = require('./Utils/Utils')
const app = express();
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const cors = require('cors')


const PORT = process.env.PORT || 4006
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/post', Utils.verifyToken, (req, res) => {
    Utils.createPost(req, res);
})

router.get('/post', Utils.verifyToken, (req, res) => {
    Utils.findPost(req, res)
})

router.post('/login', (req, res) => {

    Utils.findLogin(req, res)
})

router.post('/create', (req, res) => {
    Utils.createLogin(req, res)
})

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);


app.listen(PORT, () => console.log('Start port 4006'))