import axiosInstance from '@/utils/axiosInstance'
import createQueryParams from '@/utils/createQueryParams'

const defaultFetcher = async (
  args: Array<Record<string, unknown>> | string
) => {
  if (typeof args === 'string') {
    return axiosInstance.get(args).then((res) => res.data)
  }

  const [url, { params }] = args
  const modifiedParams = createQueryParams(params as Record<string, unknown>)
  return axiosInstance
    .get(`${String(url)}?${modifiedParams}`)
    .then((res) => res.data)
}

export default defaultFetcher
