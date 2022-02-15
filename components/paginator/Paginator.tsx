import {
  ChevronLeftRounded,
  ChevronRightRounded,
  MoreHorizRounded,
} from '@material-ui/icons'

import blogConfig from '../../config/blog.config'
import styles from './Paginator.module.scss'

export interface PaginatorProps {
  page: number
  lastPage: number
  displayCount?: number
  enableQuickPaging?: boolean
}

const Paginator = ({
  page,
  lastPage,
  displayCount = 5,
  enableQuickPaging = false,
}: PaginatorProps) => {
  const displayPageNumCnt =
    lastPage - page < displayCount ? lastPage - page + 1 : displayCount
  const pageNumbers = Array(displayPageNumCnt)
    .fill(page)
    .map((page, idx) => page + idx)

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button>
            <ChevronLeftRounded />
          </button>
        </li>

        {page > 1 && (
          <>
            <li>
              <a href={`${blogConfig.baseURL}/posts/1`}>{1}</a>
            </li>
            <MoreHorizRounded />
          </>
        )}

        {pageNumbers.map((pageNum) => (
          <li key={pageNum}>
            <a
              className={page === pageNum ? styles.currentPage : ''}
              href={`${blogConfig.baseURL}/posts/${pageNum}`}
            >
              {pageNum}
            </a>
          </li>
        ))}

        {page < lastPage && (
          <>
            <MoreHorizRounded />
            <li>
              <a href={`${blogConfig.baseURL}/posts/${lastPage}`}>{lastPage}</a>
            </li>
          </>
        )}
        <li>
          <button>
            <ChevronRightRounded />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Paginator
