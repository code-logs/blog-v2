import { Reference } from '../types'

export const CATEGORIES = {
  ['short-diary']: 'short-diary',
} as const

export type CategoryType = typeof CATEGORIES[keyof typeof CATEGORIES]

export interface Project {
  title: string
  fileName: string
  description: string
  category: CategoryType
  published: boolean
  publishedAt: string
  thumbnailName: string
  references?: Reference[]
  tags: string[]
  series?: {
    prevPostTitle?: string
    nextPostTitle?: string
  }
}

const projects: Project[] = [
  {
    title: '짧은 인생, 짧은 일기',
    fileName: 'short-diary-20230606.md',
    description: 'React Native 첫번째 프로젝트 - 짧은 인생, 짧은 일기',
    category: CATEGORIES['short-diary'],
    published: true,
    publishedAt: '2023-06-06',
    thumbnailName: 'short-diary.webp',
    tags: ['react native', '일기', '생산성'],
  },
]

export default projects
