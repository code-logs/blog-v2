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
  
  return (
    <nav className={styles.navBar}>
      <ul>
        {menus.map(({ display, route }, idx) => (
          <li key={idx}>
            <MarkedAnchor href={route} display={display} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
