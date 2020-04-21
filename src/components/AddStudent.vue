<template>
  <div class="submit-form">
 <h2>Add new Student</h2>

    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="student.firstName"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Last Name</label>
        <input
          class="form-control"
          id="lastname"
          required
          v-model="student.lastName"
          name="description"
        />
      </div>

      <button @click="saveStudent" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newStudent">Add</button>
    </div>
  </div>
</template>

<script>
import StudentService from '../service/studentService'

export default {
  name: 'add',
  data () {
    return {
      student: {
        id: null,
        firstName: '',
        lastName: ''
      },
      submitted: false
    }
  },
  methods: {
    saveStudent () {
      var data = {
        firstName: this.student.firstName,
        lastName: this.student.lastName
      }

      StudentService.addStudent(data)
        .then(response => {
          this.student.id = response.data.id
    
        })
      this.submitted = true
    },
    newStudent () {
      this.submitted = false
      this.student = {}
    }
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
