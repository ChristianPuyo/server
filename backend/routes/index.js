const {Router} = require("express")
const courseRouter = require('./courseRoutes')

const router = Router();

router.use('/course', courseRouter)


module.exports = router