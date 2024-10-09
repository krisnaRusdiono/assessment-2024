import { Image } from '@/types/albumNewReleases'

const findLargestImage = (images: Image[]) => {
  return images.reduce(
    (maxImage, currentImage) =>
      currentImage.height > maxImage.height ? currentImage : maxImage,
    images[0]
  )
}

export default findLargestImage
