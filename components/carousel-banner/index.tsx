import Image from 'next/image'
import styles from './style.module.scss'
import GTagScript from '../gtag-script/GTagScript'
import { GtagEventName, GTagUtil } from '../../utils/GTagUtil'

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
          <Image src={bannerSrc} alt={title} width={400} height={133} />
        </a>
      ))}
    </div>
  )
}
