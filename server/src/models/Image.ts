import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import Orphanage from './Orphanage'

export const imageTableName = 'images'

@Entity(imageTableName)
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  path: string

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}
