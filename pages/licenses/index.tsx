import MainAdsBanner from '../../components/ads-banner/MainAdsBanner'
import RaiseSection from '../../components/RaiseSection'
import licenses from '../../public/licenses.json'
import style from './style.module.scss'

export default function Licenses() {
  return (
    <>
      <h1>Licenses</h1>
      <RaiseSection className={style.wrapper}>
        {Object.keys(licenses).map((depName) => {
          return (
            <details className={style.licenseInfo} key={depName}>
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
      <MainAdsBanner />
    </>
  )
}
