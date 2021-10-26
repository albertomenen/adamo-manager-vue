import router from '@/router'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const token = localStorage.token

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = token
}

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse<unknown>): AxiosResponse {
    return response
  },
  function (error) {
    const { data } = error.response

    if (data.message === 'Signature expired. Please log in again.') {
      const locale = localStorage.getItem('appLocale')
      localStorage.clear()
      localStorage.appLocale = locale
      router.push({ name: 'login' })
    }

    return Promise.reject(error)
  }
)

export { axiosInstance }
