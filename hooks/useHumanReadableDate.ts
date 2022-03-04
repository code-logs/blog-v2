import { useEffect, useState } from 'react'

const useHumanReadableDate = (date: Date, separator: string = '.') => {
  const [readableDate, setReadableDate] = useState('')

  useEffect(() => {
    const year = String(date.getFullYear()).slice(2)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    setReadableDate([year, month, day].join(separator))
  }, [date, separator])

  return readableDate
}

export default useHumanReadableDate
