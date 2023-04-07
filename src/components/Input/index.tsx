import { CSSProperties, ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  placeholder: string;
  text: string;
  type: string;
  styles?: CSSProperties;
};

function Input({ placeholder, text, type, styles }: Props) {
  return (
    <input
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={styles}
    />
  );
}

export default Input;
