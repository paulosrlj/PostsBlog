import { CSSProperties, ReactNode, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { inputActions } from "../../actions/input";

import style from "./style.module.scss";

type Props = {
  placeholder: string;
  text?: string;
  type: string;
  styles?: CSSProperties;
};

function Input({ placeholder, text, type, styles }: Props) {

  const value = useSelector((state: any) => state.signUpInput.inputValue);

  const dispatch = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateInput(e.target.value))
    dispatch(inputActions.verifyIfIsInvalid())
  }

  return (
    <input
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={styles}
      onChange={handleInputChange}
      value={value}
    />
  );
}

export default Input;
