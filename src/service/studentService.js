import http from '../http'
class StudentService {
  getAllStudents () {
    return http.get('/students')
  }

  getStudentById (studentId) {
    return http.get(`/student/${studentId}`)
  }

  addStudent (data) {
    return http.post('/student', data)
  }

  deleteStudent (studentId) {
    return http.delete(`/student/${studentId}`)
  }

  updateStudent (studentId, data) {
    return http.put(`/student/${studentId}`, data)
  }
}

export default new StudentService()
