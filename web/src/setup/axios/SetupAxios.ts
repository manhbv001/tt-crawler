import { AxiosResponse } from 'axios'

export default function setupAxios(axios: any, store: any) {
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: { accessToken },
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err: any) => {
      console.log(err)
      return Promise.reject(err)
    }
  )
  axios.interceptors.response.use((response: AxiosResponse) => response.data)
}
