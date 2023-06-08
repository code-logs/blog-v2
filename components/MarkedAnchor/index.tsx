import style from './style.module.scss'

export interface MarkedAnchorProps {
  display: string
  href: string
  matched: boolean
}

export default function MarkedAnchor({ display, href, matched }: MarkedAnchorProps) {
  return (
    <a href={href} className={matched ? `${style.matched} ${style.anchor}` : style.anchor}>
      {display}
    </a>
  )
}
