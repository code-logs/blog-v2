// Check Base URL
import blogConfig from './config/blog.config'

if (blogConfig.baseURL.match(/localhost/)) {
  const error = 'It seems like base url indicating localhost, Please check your `blog.config`.'
  console.log()
  console.error(error)
  console.log()
  
  process.exit(1)
}
