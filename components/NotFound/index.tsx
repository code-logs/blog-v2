import MainAdsBanner from '../ads-banner/MainAdsBanner'
import style from './style.module.scss'

export interface NoFoundPostingProps {
  condition: string
}

export default function NotFound({ condition }: NoFoundPostingProps) {
  return (
    <section className={style.noFoundPosting}>
      <h2>발견된 포팅이 없습니다.</h2>
      <p>
        <strong>{`'${decodeURIComponent(condition)}'`}</strong>을 통해 발견된 포스팅이 없습니다.
      </p>

      <MainAdsBanner />
    </section>
  )
}
