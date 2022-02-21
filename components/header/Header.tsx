import { useRef, useState } from 'react'
import useScroll from '../../hooks/useScroll'
import NavBar, { Menu } from '../nav-bar/NavBar'
import styles from './Header.module.scss'

export interface SocialIcon {
  href: string
  icon: JSX.Element
}

export interface HeaderProps {
  title: string
  menus: Menu[]
  socialIcons: SocialIcon[]
}

const Header = ({ title, menus, socialIcons }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>{title}</p>

      <ul className={styles.socialIcons}>
        {socialIcons.map((socialIcon, idx) => (
          <li key={idx}>
            <a href={socialIcon.href} target="_blank" rel="noreferrer">
              {socialIcon.icon}
            </a>
          </li>
        ))}
      </ul>

      <NavBar menus={menus} />
    </header>
  )
}

export default Header
