import { Post } from '../config/posts.config'
import { Project } from '../config/projects.config'

export interface Reference {
  title: string
  url: string
}

export type ArticleType = 'post' | 'project'

export type Article = Post | Project
