export interface MetaProps {
  author?: string
  description?: string
  keywords?: string[]
  customMeta?: JSX.Element
}

const Meta = (props: MetaProps) => {
  const { author, description, keywords, customMeta } = props

  return (
    <>
      {description && <meta name="description" content={description} />}
      {Boolean(keywords?.length) && (
        <meta name="keyword" content={keywords!.join(', ')} />
      )}
      {author && <meta name="author" content={author} />}
      {customMeta && customMeta}
    </>
  )
}

export default Meta
