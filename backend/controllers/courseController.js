const Course = require('../models/Course')

//Funcion para crear un nuevo curso
const createCourseController = async(courseData)=>{
    try {
        const newCourse = await Course.create(courseData)
        return newCourse
    } catch (error) {
        throw new Error(error.message)
    }
}
//Funcion para obtener todos los cursos
const getAllCourses = async()=>{
    try {
        const courses = await Course.findAll()
        return courses
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    createCourseController,
    getAllCourses
}
