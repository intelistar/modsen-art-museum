import { FC } from 'react'
import searchIcon from '@assets/icons/search.png'
import styles from './styles.module.scss'

interface Props {
  value: string
  onInput: (value: string) => void
  placeholder: string
}

const InputForm: FC<Props> = ({ value, onInput, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className={styles.input}
        placeholder={placeholder}
      />
      <img src={searchIcon} alt="search icon" />
    </div>
  )
}

export default InputForm
