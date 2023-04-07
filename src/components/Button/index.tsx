import { CSSProperties, ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  styles?: CSSProperties;
};

function Button({ children, styles, disabled = false }: Props) {
  console.log(disabled);
  return (
    <button
      className={`${style.button} ${disabled ? style.buttonDisabled : ""}`}
      style={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
