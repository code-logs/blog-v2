import {
  ChevronLeftRounded,
  ChevronRightRounded,
  MoreHorizRounded,
} from '@material-ui/icons'
import { useEffect, useState } from 'react'

import blogConfig from '../../config/blog.config'
import { debug } from 'console'
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
  const [pageList, setPageList] = useState<number[]>([])
  useEffect(() => {
    const prevPages = []
    const nextPages = []

    const minItemCount = Math.floor(displayCount / 2)

    for (let i = 0; i < minItemCount; i++) {
      const prevPage = page - minItemCount + i
      if (prevPage > 0) prevPages.push(prevPage)

      const nextPage = page + 1 + i
      if (nextPage <= lastPage) nextPages.push(nextPage)
    }

    setPageList([...prevPages, page, ...nextPages])
  }, [page, lastPage, displayCount])

  return (
    <div className={styles.container}>
      <ul>
        {page > 1 && (
          <li>
            <a href={`${blogConfig.baseURL}/posts/${page - 1}`}>
              <ChevronLeftRounded />
            </a>
          </li>
        )}

        {page > 1 && !pageList.includes(1) && (
          <>
            <li>
              <a href={`${blogConfig.baseURL}/posts/1`}>{1}</a>
            </li>
            <MoreHorizRounded />
          </>
        )}

        {pageList.map((pageNum) => (
          <li key={pageNum}>
            <a
              className={page === pageNum ? styles.currentPage : ''}
              href={`${blogConfig.baseURL}/posts/${pageNum}`}
            >
              {pageNum}
            </a>
          </li>
        ))}

        {page < lastPage && !pageList.includes(lastPage) && (
          <>
            <MoreHorizRounded />
            <li>
              <a href={`${blogConfig.baseURL}/posts/${lastPage}`}>{lastPage}</a>
            </li>
          </>
        )}
        {page < lastPage && (
          <li>
            <a href={`${blogConfig.baseURL}/posts/${page + 1}`}>
              <ChevronRightRounded />
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Paginator
