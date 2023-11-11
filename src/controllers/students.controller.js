function createStudent(req, res) {
  const studentInfo = req.body;
  console.log('i got student information');
  console.log(studentInfo);
  res.send({ studentInfo });
}

function getStudents(req, res) {
  res.send({ result: 'all students' });
}

// exports.create = createStudent;

module.exports = {
  create: createStudent,
  getStudents: getStudents,
};
