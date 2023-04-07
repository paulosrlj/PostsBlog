import { ReactNode } from 'react'

import style from './style.module.scss';

type Props = {
    children: ReactNode
}

function Button({ children }: Props) {
  return (
    <button className={style.button}>
      {children}
    </button>
  )
}

export default Button