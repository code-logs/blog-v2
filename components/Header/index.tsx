import NavBar, { Menu } from '../NavBar'
import style from './style.module.scss'

export interface SocialIcon {
  href: string
  icon: JSX.Element
  label: string
}

export interface HeaderProps {
  title: string
  menus: Menu[]
  socialIcons: SocialIcon[]
}

export default function Header({ title, menus, socialIcons }: HeaderProps) {
  return (
    <header className={style.header}>
      <span className={style.title}>{title}</span>

      <ul className={style.socialIcons}>
        {socialIcons.map((socialIcon, idx) => (
          <li key={idx}>
            <a href={socialIcon.href} target="_blank" rel="noreferrer" aria-label={socialIcon.label}>
              {socialIcon.icon}
            </a>
          </li>
        ))}
      </ul>

      <NavBar menus={menus} />
    </header>
  )
}
