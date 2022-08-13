import { SearchRounded } from '@mui/icons-material'
import styles from './SearchInput.module.scss'

export interface SearchInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <label className={styles.label}>
      <SearchRounded className={styles.icon} />
      <input className={styles.input} {...props} spellCheck={false} />
    </label>
  )
}

export default SearchInput
