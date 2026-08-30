export interface Project {
  id: string | number
  title: string
  type?: 'video' | 'image' | string
  mediaUrl?: string
  videoUrl?: string
  imageUrl?: string
  image?: string
  video?: string
  src?: string
  posterUrl?: string
  software?: string
  date?: string
  category?: string
}