import { Menu } from '../components/nav-bar/NavBar'
import blogConfig from './blog.config'

const menus: Menu[] = [
  { display: 'Home', route: '/' },
  { display: 'Posts', route: '/posts/1' },
  { display: 'About', route: '/about' },
].map((menu) => ({ ...menu, route: `${blogConfig.baseURL}${menu.route}` }))

export default menus
