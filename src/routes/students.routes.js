const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students.controller');
//CRUD
// C= Create
// R = Read
// U = Update
// D = Delete

// create new employee
router.post('/', studentsController.create);
router.get('/', studentsController.getStudents);

module.exports = router;
