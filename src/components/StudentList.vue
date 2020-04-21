<template>
    <div class="container">
      <h3 style="text-align:center">Student Management</h3>

      <div v-if="message" class="alert alert-success">
     {{message}}

      </div>
       <div class="container">
           <table class="table table-hover">
               <thead >
                <tr class="info">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th> Update </th>
                  <th> Delete</th>
                </tr>
               </thead>

               <tbody>
               <tr v-for="student in students" v-bind:key="student.id">
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td>
                        <router-link :to="{name:'studentDetails',params:{studentId:student.id} }">

                        <i class="btn btn-success"> edit</i>
                        </router-link>
                     </td>
                    <td>  <button class="btn btn-danger" @click="deletecoursecliked(student.id)"> Delete</button></td>
               </tr>
               </tbody>

           </table>

       </div>

    </div>
</template>
<script>
import StudentService from '../service/studentService'
export default {
  name: 'students',
  data () {
    return {
      students: [],
      message: null
    }
  },
  created () {
    StudentService.getAllStudents()
      .then(response => {
        this.students = response.data
      })
  },

  methods: {
    deletecoursecliked (id) {
      StudentService.deleteStudent(id)
        .then(response => {
          this.message = `student with id = ${id}  deleted successful`
          this.created()
        })
    }
  }

}
</script>

<style scoped>

</style>
