import blogConfig from '../config/blog.config'

class TitleUtil {
  public static buildPageTitle(pageTitle: string) {
    return `${pageTitle} | ${blogConfig.title}`
  }
}

export default TitleUtil
