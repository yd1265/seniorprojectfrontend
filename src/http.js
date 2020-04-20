import axios from 'axios'
export default axios.create({
  baseURL: 'https://koune.herokuapp.com/api/',

  headers: {
    'Content-type': 'application/json'
  }

})
