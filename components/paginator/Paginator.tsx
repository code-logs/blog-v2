import { ChevronLeftRounded, ChevronRightRounded, MoreHorizRounded } from '@mui/icons-material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Paginator.module.scss'

export interface PaginatorProps {
  page: number
  lastPage: number
  displayCount?: number
  query?: string
  enableQuickPaging?: boolean
  baseURL: string
}

const Paginator = ({ page, lastPage, displayCount = 5, query, baseURL }: PaginatorProps) => {
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

  useEffect(() => {}, [])

  const buildURL = (page: number) => {
    let url = `${baseURL}/${page}`
    if (query) url += `?query=${query}`

    return url
  }

  return (
    <div className={styles.container}>
      <ul>
        {page > 1 && (
          <li>
            <Link href={buildURL(page - 1)}>
              <a>
                <ChevronLeftRounded />
              </a>
            </Link>
          </li>
        )}

        {page > 1 && !pageList.includes(1) && (
          <>
            <li>
              <Link href={buildURL(1)}>
                <a>{1}</a>
              </Link>
            </li>
            <MoreHorizRounded />
          </>
        )}

        {pageList.map((pageNum) => (
          <li key={pageNum}>
            <Link href={buildURL(pageNum)}>
              <a className={page === pageNum ? styles.currentPage : ''}>{pageNum}</a>
            </Link>
          </li>
        ))}

        {page < lastPage && !pageList.includes(lastPage) && (
          <>
            <MoreHorizRounded />
            <li>
              <Link href={buildURL(lastPage)}>
                <a>{lastPage}</a>
              </Link>
            </li>
          </>
        )}
        {page < lastPage && (
          <li>
            <Link href={buildURL(page + 1)}>
              <a>
                <ChevronRightRounded />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Paginator
