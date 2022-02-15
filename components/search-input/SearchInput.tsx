import { SearchRounded } from '@material-ui/icons'
import styles from './SearchInput.module.scss'

export interface SearchInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <label className={styles.label}>
      <SearchRounded className={styles.icon} />
      <input className={styles.input} type="search" {...props} />
    </label>
  )
}

export default SearchInput
