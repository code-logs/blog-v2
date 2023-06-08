import style from './style.module.scss'

export interface ContentCountProps {
  mode: 'query' | 'list'
  count: number
}

export default function ContentCount({ mode, count }: ContentCountProps) {
  return <span className={style.contentCount}>{mode === 'query' ? `Found ${count}` : `Total ${count}`}</span>
}
