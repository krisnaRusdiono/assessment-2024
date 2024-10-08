import axiosInstance from '@/utils/axiosInstance'

const defaultFetcher = async (url: string) =>
  axiosInstance.get(url).then((res) => res.data)

export default defaultFetcher
