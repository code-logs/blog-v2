import { NextPage } from 'next'
import CommonMeta from '../../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../../components/google-adsense/GoogleAdsenseBanner'
import KakaoAdfitBanner from '../../components/kakao-adfit/KakaoAdfitBanner'
import { TagWithCount } from '../../components/tag-indexer/TagIndexer'
import TagList, { TagsByIndexes } from '../../components/tag-list/TagList'
import TagNavigator from '../../components/tag-navigator/TagNavigator'
import TitleWithCount from '../../components/title-with-count/TitleWithCount'
import blogConfig from '../../config/blog.config'
import postsDatabase from '../../database/post-database'
import TitleUtil from '../../utils/TitleUtil'

export async function getStaticProps() {
  const tags = postsDatabase
    .find()
    .map((post) => post.tags)
    .flat()
    .sort((a, b) => (a > b ? 1 : -1))

  return {
    props: {
      tags,
    },
  }
}

const Tags: NextPage<{ tags: string[] }> = ({ tags }) => {
  const indexGroups = [
    ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '하'],
    Array(26)
      .fill('')
      .map((_: string, idx: number) => String.fromCharCode(idx + 65)),
  ]

  const tagsWithCount = tags.reduce((tagsWithCount, tag) => {
    const targetIndex = tagsWithCount.findIndex((tagWithCount) => tagWithCount.tag === tag)

    if (targetIndex >= 0) {
      tagsWithCount[targetIndex].count++
    } else {
      tagsWithCount.push({ tag, count: 1 })
    }

    return tagsWithCount
  }, [] as TagWithCount[])

  const indexes = indexGroups.flat()
  const tagsByIndexes = indexes.reduce((tagsByIndexes, index) => {
    tagsByIndexes[index] = []
    return tagsByIndexes
  }, {} as TagsByIndexes)

  tagsWithCount.forEach((tagWithCount) => {
    const tagCharCode = tagWithCount.tag.toUpperCase().charCodeAt(0)

    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i]
      const nextIndex = indexes[i + 1]
      const indexCharCode = index.toUpperCase().charCodeAt(0)
      let nextIndexCharCode: number | undefined
      if (nextIndex) nextIndexCharCode = nextIndex.toUpperCase().charCodeAt(0)

      if (nextIndexCharCode !== undefined) {
        if (tagCharCode >= indexCharCode && tagCharCode < nextIndexCharCode) {
          tagsByIndexes[index].push(tagWithCount)
          break
        }
      } else {
        tagsByIndexes[index].push(tagWithCount)
      }
    }
  })

  const activatedIndexes = indexes.reduce((activatedIndexes, index) => {
    if (tagsByIndexes[index].length) activatedIndexes.push(index)
    return activatedIndexes
  }, [] as string[])

  return (
    <section>
      <CommonMeta
        title={TitleUtil.buildPageTitle('Tags 목록')}
        description={'Tag를 기준으로 포스팅을 색인합니다.'}
        url={`${blogConfig.baseURL}/tags`}
        imageURL={'/icons/icon-512x512.png'}
      />

      <TitleWithCount level={1} title="Tags" count={tags.length}></TitleWithCount>

      <TagNavigator activatedIndexes={activatedIndexes} indexGroups={indexGroups} />

      <TagList indexGroups={indexGroups} tagsByIndexes={tagsByIndexes} />

      <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" />

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
    </section>
  )
}

export default Tags
