import { ReactNode } from 'react'

import style from './style.module.scss';

type Props = {
    placeholder: string;
    text: string;
    type: string;
}

function Input({ placeholder, text, type }: Props) {
  return (
    <input className={style.input} type={type} placeholder={placeholder} />
  )
}

export default Input