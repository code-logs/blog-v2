import Head from 'next/head'
import React from 'react'
import blogConfig from '../../config/blog.config'
import GAScript, { GAScriptProps } from './GAScript'
import Meta, { MetaProps } from './Meta'
import OpenGraph, { OpenGraphProp } from './OpenGraph'
import PWA from './PWA'

export type CommonHeadProps = GAScriptProps &
  OpenGraphProp &
  MetaProps & { canonicalURL: string }

const CommonHead = (props: CommonHeadProps): JSX.Element => {
  const pageTitle = props.title
    ? `${props.siteName} | ${props.title}`
    : props.siteName

  return (
    <Head>
      <GAScript gaID={props.gaID} />
      <PWA
        themeColor={blogConfig.themeColor}
        appleTouchIconPath={blogConfig.appleTouchIconPath}
      />

      <OpenGraph
        title={pageTitle}
        description={props.description}
        siteName={blogConfig.title}
        url={props.url}
        imageURL={props.imageURL}
      />

      <Meta
        author={props.author}
        description={props.description}
        keywords={props.keywords}
        customMeta={props.customMeta}
      />

      <title>{pageTitle}</title>
      <link rel="canonical" href={props.canonicalURL} />
    </Head>
  )
}

export default CommonHead
