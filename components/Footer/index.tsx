import style from './style.module.scss'

export interface FooterProps {
  author: string
  message?: string
}

export default function Footer({ message, author }: FooterProps) {
  return (
    <footer className={style.footer}>
      <p>{message ? message : `ⓒ 2021. ${author}  all rights reserved.`}</p>
    </footer>
  )
}
