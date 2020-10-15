import Orphanage from '../models/Orphanage'
import imagesView, { ImageViewProps } from './images_view'

interface OrphanageViewProps {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Pick<ImageViewProps, 'url' | 'id'>[]
}

export default {
  render(orphanage: Orphanage): OrphanageViewProps {
    return {
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    }
  },
  renderMany(orphanages: Orphanage[]): OrphanageViewProps[] {
    return orphanages.map(orphanage => this.render(orphanage))
  },
}
