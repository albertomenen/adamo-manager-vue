import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const token = localStorage.token

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = token
}

export { axiosInstance }
