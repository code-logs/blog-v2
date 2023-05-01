import GTagScript from '../gtag-script/GTagScript'
import styles from './style.module.scss'

export interface Banner {
  title: string
  bannerSrc: string
  link: string
}

export interface CarouselBannerProps {
  banners: Banner[]
}

export default function CarouselBanner({ banners }: CarouselBannerProps) {
  return (
    <div className={styles.bannerContainer}>
      {banners.map(({ title, bannerSrc, link }) => (
        <a key={link} href={link} target="_blank" rel="noreferrer">
          <img src={bannerSrc} alt={title} />
        </a>
      ))}
    </div>
  )
}
