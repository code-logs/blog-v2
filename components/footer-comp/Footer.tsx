import styles from './Footer.module.scss'

export interface FooterProps {
  author: string
  message?: string
}

const Footer = (props: FooterProps) => {
  return <footer className={styles.footer}>
      <p>{props.message ? props.message : `ⓒ 2021. ${props.author}  all rights reserved.`}</p>
  </footer>
}

export default Footer
