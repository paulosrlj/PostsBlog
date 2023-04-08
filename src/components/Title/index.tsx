import React, { CSSProperties, ReactNode } from 'react'

import styles from './style.module.scss'

type Props = {
    children: ReactNode
    style?: CSSProperties;
}

function Title({ children, style }: Props) {
  return (
    <h2 style={style} className={styles.title}>{children}</h2>
  )
}

export default Title
