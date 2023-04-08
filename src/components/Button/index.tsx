import { CSSProperties, ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  styles?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor?: ButtonColor;
};

export enum ButtonColor {
  primary = "primary",
  alert = "alert",
  simple = "simple",
  confirm = "confirm",
}

function Button({
  children,
  styles,
  onClick,
  disabled = false,
  buttonColor = ButtonColor.primary,
}: Props) {
  return (
    <button
      className={`${style.button} ${style[buttonColor]} ${
        disabled ? style.buttonDisabled : ""
      }`}
      style={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
