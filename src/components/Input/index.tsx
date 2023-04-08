import { CSSProperties } from "react";

import style from "./style.module.scss";

type Props = {
  placeholder: string;
  text?: string;
  type: string;
  styles?: CSSProperties;
  onChange?: any;
  value: string;
};

function Input({ placeholder, type, styles, onChange, value }: Props) {

  return (
    <input
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={styles}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
