import { GtagEventName, GTagUtil } from '../../utils/GTagUtil'
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
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            GTagUtil.log(GtagEventName.BannerClick, {
              title,
              link,
            })
          }}
        >
          <img src={bannerSrc} alt={title} width={400} height={131} />
        </a>
      ))}
    </div>
  )
}
