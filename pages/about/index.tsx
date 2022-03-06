import CommonMeta from '../../components/common-meta/CommonMeta'
import GoogleAdsenseBanner from '../../components/google-adsense/GoogleAdsenseBanner'
import KakaoAdfitBanner from '../../components/kakao-adfit/KakaoAdfitBanner'
import RaiseSection from '../../components/raise-section/RaiseSection'
import blogConfig from '../../config/blog.config'
import TitleUtil from '../../utils/TitleUtil'
import styles from './About.module.scss'

const About = () => {
  const computeCareer = () => new Date().getFullYear() - 2015
  const standardTimeout = 300
  const ratio = 1.5

  return (
    <>
      <CommonMeta
        title={TitleUtil.buildPageTitle('About')}
        description={'Code Logs에 대하여'}
        url={`${blogConfig.baseURL}/about`}
        imageURL={'/icons/icon-512x512.png'}
      />

      <article className={styles.about}>
        <h1>About</h1>

        <RaiseSection timeout={standardTimeout}>
          <h2>Here is...</h2>
          <p>이곳은 웹개발과 관련된 정보를 기록하고 공유하는 개인공간 입니다.</p>
          <p>올바른 정보를 공유하는 것을 목적으로 하지만 경우에 따라 유언비어(?)를 노출 할 수 있습니다.</p>
          <p>잘못된 정보의 공유나 바르지 않은 개인의견에 대한 피드백은 주시면 감사히 수용합니다.</p>
          <br />
          <p>공개된 공간의 정보 공유를 통해 저와 참여자 분들의 긍정적인 발전을 기원합니다.</p>
        </RaiseSection>

        <RaiseSection timeout={standardTimeout * ratio * 2}>
          <h2>I am...</h2>
          <p>고양이를 좋아하는 {computeCareer()}년차 프론트엔드 개발자 입니다.</p>
        </RaiseSection>

        <RaiseSection timeout={standardTimeout * ratio * 3}>
          <h2>Licenses</h2>
          <p>
            <a href="licenses">Link to license info</a>
          </p>
        </RaiseSection>
      </article>

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
      <KakaoAdfitBanner adfitUnitID={blogConfig.kakaoAdfitUnitIDs.mainBannerID} position="main" />
    </>
  )
}

export default About
