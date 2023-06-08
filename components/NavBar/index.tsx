import { useRouter } from 'next/router'
import MarkedAnchor from '../MarkedAnchor'
import style from './style.module.scss'

export interface Menu {
  display: string
  route: string
}

export interface NavBarProps {
  menus: Menu[]
}

export default function NavBar({ menus }: NavBarProps) {
  const router = useRouter()

  return (
    <nav className={style.navBar}>
      <ul>
        {menus.map(({ display, route }, idx) => (
          <li className="clickable" key={idx}>
            <MarkedAnchor href={route} display={display} matched={router.pathname.split('/')[1] === route.split('/')[1]} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
