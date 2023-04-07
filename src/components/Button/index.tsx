import { CSSProperties, ReactNode } from 'react'

import style from './style.module.scss';

type Props = {
  children: ReactNode;
  styles?: CSSProperties
}

function Button({ children, styles }: Props) {
  return (
    <button className={style.button} style={styles}>
      {children}
    </button>
  )
}

export default Button