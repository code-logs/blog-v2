import { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'

export interface RaiseSectionProps extends React.HTMLProps<HTMLElement> {
  timeout?: number
}

export default function RaiseSection({ timeout = 500, children, ...rest }: RaiseSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isRaise, setIsRaise] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsRaise(Boolean(ref.current))
    }, timeout)
  }, [timeout])

  return (
    <section ref={ref} className={`${style.section} ${isRaise && style.raise}`} {...rest}>
      {children}
    </section>
  )
}
