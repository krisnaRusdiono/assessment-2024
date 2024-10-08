import { SPOTIFY_API } from '@/constants/config'
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { SpotifySessionData } from '@/types/spotifySessionData'

const axiosInstance = axios.create({
  baseURL: SPOTIFY_API,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const { accessToken } = (await getSession()) as SpotifySessionData
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
