export interface OpenGraphProp {
  title: string
  description?: string
  siteName: string
  url: string
  imageURL?: string
}

const OpenGraph = (props: OpenGraphProp) => {
  const { title, description, siteName, url, imageURL } = props
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      {imageURL && <meta property="og:image" content={imageURL} />}
      {description && <meta property="og:description" content={description} />}
    </>
  )
}

export default OpenGraph
