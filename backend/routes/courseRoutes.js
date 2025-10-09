const {Router} = require("express")

const {
    createCourseController,
    getAllCourses
} = require('../controllers/courseController')

const courseRouter = Router()

//Crear una ruta para crear un nuevo curso
courseRouter.post("/", async(req, res)=>{
    const {name, description} = req.body
    try {
        const newCourse = await createCourseController({name, description})
        res.status(201).json(newCourse)  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Ruta para obtener todos los cursos
courseRouter.get("/", async(req,res)=>{
    try {
        const courses = await getAllCourses();
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = courseRouter