import { useEffect, useRef, useState } from 'react'
import styles from './RaiseSection.module.scss'

export interface RaiseSectionProps extends React.HTMLProps<HTMLElement> {
  timeout?: number
}

const RaiseSection = ({ timeout = 500, children, ...rest }: RaiseSectionProps) => {
  const ref = useRef<HTMLElement>(null)
  const [isRaise, setIsRaise] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsRaise(Boolean(ref.current))
    }, timeout)
  }, [timeout])

  return (
    <section ref={ref} className={`${styles.section} ${isRaise && styles.raise}`} {...rest}>
      {children}
    </section>
  )
}

export default RaiseSection
