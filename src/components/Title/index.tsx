import React, { ReactNode } from 'react'

import styles from './style.module.scss'

type Props = {
    children: ReactNode
}

function Title({ children }: Props) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}

export default Title