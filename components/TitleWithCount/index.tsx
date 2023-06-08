import style from './style.module.scss'

export interface TitleWithCountProps {
  level?: 1 | 2 | 3
  title: string
  count: number
}

export default function TitleWithCount({ level, title, count }: TitleWithCountProps) {
  const innerFragment = (
    <>
      {title} <span className={style.postCount}>({count})</span>
    </>
  )

  switch (level) {
    case 1:
      return <h1>{innerFragment}</h1>

    case 2:
      return <h2>{innerFragment}</h2>

    case 3:
      return <h3>{innerFragment}</h3>

    default:
      return <h1>{innerFragment}</h1>
  }
}
