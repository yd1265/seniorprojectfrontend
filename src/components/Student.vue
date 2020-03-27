<template>
<div v-if="currentStudent" class="edit-form">
<h2>Update Student</h2>
    <form>
        <div class="form-group">
            <label for="name">First Name</label>
            <input type="text" class="form-control" v-model="currentStudent.firstName" required name="firstName"/>
        </div>

        <div class="form-group">
            <label for="last">Last Name</label>
            <input type="text" class="form-control" v-model="currentStudent.lastName" required name="lastName"/>
        </div>
    </form>
       <button class="btn btn-success" @click="updateStudent" >Update</button>

        <button class="btn btn-danger" @click="deleteStudent" style="margin-left:10px">Cancel</button>
        <p>{{ message }}</p>
</div>

<div v-else>
    <h2>Please click</h2>

</div>

</template>

<script>
import Studentservice from '../service/studentService'
export default {
  name: 'studentDetails',
  data () {
    return {
      currentStudent: null,
      message: ''

    }
  },
  methods: {
    getStudent (id) {
      Studentservice.getStudentById(id)
        .then(response => {
          this.currentStudent = response.data
          console.log(this.currentStudent)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateStudent () {
      Studentservice.updateStudent(this.currentStudent.id, this.currentStudent)
        .then(response => {
          console.log(response.data)
          this.message = 'This student information  has been updated!'
        })
    },
    deleteStudent () {
      this.$router.push({ name: 'students' })
    }
  },
  mounted () {
    this.getStudent(this.$route.params.studentId)
    this.message = ''
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}

</style>
