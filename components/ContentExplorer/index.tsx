import { useCallback, useEffect, useState } from 'react'
import useScroll from '../../hooks/useScroll'
import styles from './ContentExplorer.module.scss'

interface Heading {
  element: HTMLHeadingElement
  parent?: Heading
  children: Heading[]
}

export default function ContentExplorer() {
  const [headings, setHeadings] = useState<Heading[]>([])

  const getContentSection = useCallback(() => {
    const contentSection = document.querySelector<HTMLElement>('main section#content')
    if (!contentSection) throw new Error('Failed to find content section')
    return contentSection
  }, [])

  const getHeadingElements = useCallback(() => {
    return Array.from(getContentSection().querySelectorAll<HTMLHeadingElement>('h2, h3, h4'))
  }, [getContentSection])

  useEffect(() => {
    const contentSection = getContentSection()
    const h2List = Array.from(contentSection.querySelectorAll<HTMLHeadingElement>('h2'))
    let headings = h2List.map((heading) => ({ element: heading, children: [] } as Heading))

    const h3List = Array.from(contentSection.querySelectorAll<HTMLHeadingElement>('h3'))
    h3List.forEach((h3) => {
      let parentHeadingElement = h3.previousElementSibling
      if (!parentHeadingElement) throw new Error('Failed to find parent heading element')

      while (parentHeadingElement.tagName !== 'H2') {
        if (!parentHeadingElement.previousElementSibling) throw new Error('Failed to find parent heading element')
        parentHeadingElement = parentHeadingElement.previousElementSibling
      }

      const parentHeading = headings.find(({ element }) => element === parentHeadingElement)
      if (!parentHeading) throw new Error('Failed to find parent heading')
      parentHeading.children.push({ element: h3, children: [], parent: parentHeading })
    })

    const h4List = Array.from(contentSection.querySelectorAll<HTMLHeadingElement>('h4'))
    h4List.forEach((h4) => {
      let parentHeadingElement = h4.previousElementSibling
      if (!parentHeadingElement) throw new Error('Failed to find parent heading element')

      while (parentHeadingElement.tagName !== 'H3') {
        if (!parentHeadingElement.previousElementSibling) throw new Error('Failed to find parent heading element')
        parentHeadingElement = parentHeadingElement.previousElementSibling
      }

      const parentHeading = headings.find(({ element }) => element === parentHeadingElement)
      if (!parentHeading) throw new Error('Failed to find parent heading')
      parentHeading.children.push({ element: h4, children: [], parent: parentHeading })
    })

    setHeadings(headings)
  }, [getContentSection])

  const [activeElement, setActiveElement] = useState<HTMLHeadingElement | null>(null)

  useScroll(() => {
    const headingElements = getHeadingElements()
    if (!headingElements.length) return

    const HEADER_HEIGHT = 140
    const TOP_MARGIN = 20
    const BOUNDARY = 10
    const PADDING = HEADER_HEIGHT + TOP_MARGIN + BOUNDARY

    const foundElement = headingElements.find((headingElement, index) => {
      const nextHeadingElement = headingElements[index + 1]
      if (nextHeadingElement) {
        return window.scrollY >= headingElement.offsetTop - PADDING && window.scrollY < nextHeadingElement.offsetTop - PADDING
      } else {
        return window.scrollY >= headingElement.offsetTop - PADDING
      }
    })

    if (foundElement && activeElement !== foundElement) setActiveElement(foundElement)
  })

  return (
    <section className={styles.container}>
      <ol>
        {headings.map((heading) => (
          <li key={heading.element.id}>
            <a className={activeElement === heading.element ? styles.activate : ''} href={`#${heading.element.id}`}>
              {heading.element.textContent}
            </a>

            {!!heading.children.length && (
              <ol>
                {heading.children.map((heading) => (
                  <li key={heading.element.id}>
                    <a className={activeElement === heading.element ? styles.activate : ''} href={`#${heading.element.id}`}>
                      {heading.element.textContent}
                    </a>

                    {!!heading.children.length && (
                      <ol>
                        {heading.children.map((heading) => (
                          <li key={heading.element.id}>
                            <a className={activeElement === heading.element ? styles.activate : ''} href={`#${heading.element.id}`}>
                              {heading.element.textContent}
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
