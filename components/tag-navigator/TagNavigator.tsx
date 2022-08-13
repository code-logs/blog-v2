import styles from './TagNavigator.module.scss'

export interface TagNavigatorProps {
  indexGroups: string[][]
  activatedIndexes: string[]
}

const TagNavigator = (props: TagNavigatorProps) => {
  const indexesSet = new Set(props.activatedIndexes)
  return (
    <div className={styles.container}>
      {props.indexGroups.map((indexes, keyIdx) => {
        return (
          <ol key={keyIdx}>
            {indexes.map((index) => (
              <li key={index}>
                <a href={`#${index}`} className={indexesSet.has(index) ? styles.active : ''}>
                  {index}
                </a>
              </li>
            ))}
          </ol>
        )
      })}
    </div>
  )
}

export default TagNavigator
