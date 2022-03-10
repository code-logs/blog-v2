import PostCard from '../post-card/PostCard'
import TitleWithCount from '../title-with-count/TitleWithCount'

export interface PostRef {
  title: string
  url: string
}

export enum Categories {
  SEO = 'SEO',
  Javascript = 'javascript',
  CSS = 'CSS',
  React = 'react',
  UIandUX = 'UI and UX',
  Typescript = 'typescript',
  Elasticsearch = 'elasticsearch',
  Infrastructure = 'infrastructure',
  DevEnv = '개발환경',
  Cloud = 'cloud',
  Svelte = 'svelte',
  Security = 'security',
  NodeJS = 'nodejs'
}

export interface Post {
  title: string
  fileName: string
  description: string
  category: Categories
  published: boolean
  publishedAt: string
  thumbnailName: string
  tags: string[]
  references?: PostRef[]
}

export interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts = (props: RecentPostsProps) => {
  return (
    <section>
      <TitleWithCount level={2} count={props.posts.length} title="Recent posts" />

      {props.posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </section>
  )
}

export default RecentPosts
