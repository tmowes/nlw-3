import Image from '../models/Image'

export interface ImageViewProps extends Image {
  url: string
}

export default {
  render(image: Image): Omit<ImageViewProps, 'path' | 'orphanage'> {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    }
  },
  renderMany(images: Image[]): Omit<ImageViewProps, 'path' | 'orphanage'>[] {
    return images.map(image => this.render(image))
  },
}
