const {Router} = require("express")

const {
    createStudent,
    getAllStudent,
    deleteStudent,
    updateStudent
} = require('../controllers/studentController')

const studentRouter = Router()

//Crear una ruta para crear un nuevo curso
studentRouter.post("/", async(req, res)=>{
    const {firstName, lastName, age} = req.body
    try {
        const newStudent = await createStudent({firstName, lastName, age})
        res.status(201).json(newStudent)  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Ruta para obtener todos los cursos
studentRouter.get("/", async(req,res)=>{
    try {
        const courses = await getAllCourses();
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Ruta para eliminar
studentRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
       const deletedCourse = await deleteCourse(id)
       if(!deletedCourse){
        return res.status(404).json({errorRuta: "Course not found" })
       }
       res.status(200).json({message: "Course deleted succesfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Ruta para actualizar curso
studentRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const courseData = req.body
    try { 
        const updateCourse = await updatedCourse(id, courseData)
        if(!updateCourse){
            return res.status(404).json({error:"Course not found"})
        }
        res.status(200).json(updatedCourse)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = studentRouter