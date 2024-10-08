import axiosInstance from '@/utils/axiosInstance'
import createQueryParams from '@/utils/createQueryParams'

const defaultFetcher = async (args: Array<Record<string, unknown>>) => {
  const [url, { params }] = args
  const modifiedParams = createQueryParams(params as Record<string, unknown>)
  return axiosInstance
    .get(`${String(url)}?${modifiedParams}`)
    .then((res) => res.data)
}

export default defaultFetcher
