import Head from 'next/head'
import blogConfig from '../../config/blog.config'

export interface CommonMetaProps {
  title: string
  description: string
  keywords?: string[]
  url: string
  imageURL: string
  customMeta?: JSX.Element
}

const CommonMeta = (props: CommonMetaProps) => {
  const { title, description, keywords, url, imageURL, customMeta } = props

  return (
    <Head>
      <link rel="canonical" href={blogConfig.baseURL} />

      {/* PWA */}
      <link rel="apple-touch-icon" href={blogConfig.appleTouchIconPath} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" key="theme-color" content={blogConfig.themeColor} />


      {/* Common meta */}
      {/* Static meta */}
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:site_name" key="og:site_name" content={blogConfig.title} />
      <meta name="author" key="author" content={blogConfig.author} />

      {/* Dynamic meta */}
      {keywords?.length && <meta name="keyword" key="keyword" content={keywords!.join(', ')} />}
      <meta name="description" key="description" content={description} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:url" key="og:url" content={url} />
      <meta property="og:image" key="og:image" content={imageURL} />

      {customMeta && customMeta}

      <title>{title}</title>
    </Head>
  )
}

export default CommonMeta
