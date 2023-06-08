import style from './style.module.scss'

export interface TagNavigatorProps {
  indexGroups: string[][]
  activatedIndexes: string[]
}

export default function TagNavigator({ indexGroups, activatedIndexes }: TagNavigatorProps) {
  const indexesSet = new Set(activatedIndexes)
  return (
    <div className={style.container}>
      {indexGroups.map((indexes, keyIdx) => {
        return (
          <ol key={keyIdx}>
            {indexes.map((index) => (
              <li key={index}>
                <a href={`#${index}`} className={indexesSet.has(index) ? style.active : ''}>
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
