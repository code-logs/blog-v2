import { SearchRounded } from '@mui/icons-material'
import style from './style.module.scss'

export interface SearchInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <label className={style.label}>
      <SearchRounded className={style.icon} />
      <input className={style.input} {...props} spellCheck={false} />
    </label>
  )
}
