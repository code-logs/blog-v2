import { useRouter } from 'next/router'
import MarkedAnchor from '../marked-anchor/MarkedAnchor'
import styles from './NavBar.module.scss'

export interface Menu {
  display: string
  route: string
}

export interface NavBarProps {
  menus: Menu[]
}

const NavBar = (props: NavBarProps) => {
  const { menus } = props
  const router = useRouter()

  return (
    <nav className={styles.navBar}>
      <ul>
        {menus.map(({ display, route }, idx) => (
          <li key={idx}>
            <MarkedAnchor href={route} display={display} matched={router.pathname.split('/')[1] === new URL(route!).pathname.split('/')[1]} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
