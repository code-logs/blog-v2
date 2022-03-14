import GoogleAdsenseBanner from '../../components/google-adsense/GoogleAdsenseBanner'
import RaiseSection from '../../components/raise-section/RaiseSection'
import blogConfig from '../../config/blog.config'
import licenses from '../../public/licenses.json'
import styles from './Licenses.module.scss'

const Licenses = () => {
  return (
    <>
      <h1>Licenses</h1>
      <RaiseSection className={styles.wrapper}>
        {Object.keys(licenses).map((depName) => {
          return (
            <details className={styles.licenseInfo} key={depName}>
              <summary>{depName}</summary>
              <ul>
                <li>{(licenses as any)[depName].licenses}</li>
                {(licenses as any)[depName].licenseUrl && (
                  <li>
                    <a target="_blank" rel="noreferrer" href={(licenses as any)[depName].licenseUrl}>
                      Link
                    </a>
                  </li>
                )}
              </ul>
            </details>
          )
        })}
      </RaiseSection>

      <GoogleAdsenseBanner adClient={blogConfig.googleAdsense.adClient} adSlot="5391522351" />
    </>
  )
}

export default Licenses
