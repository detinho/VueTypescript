import axios from 'axios'

export default class Http {
  getData (url: string, params: Object) {
    return axios.get(url, {
      params
    })
    .then(response => {
      return response.data
    })
  }
}
