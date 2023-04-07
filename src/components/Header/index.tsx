import React from 'react'

import styles from './style.module.scss'
import Title from '../Title'

function Header() {
  return (
    <header className={styles.header}>
      <Title>CodeLeap Network</Title>
    </header>
  )
}

export default Header
