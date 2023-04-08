import { useSelector, useDispatch } from "react-redux";

import style from "./style.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { inputActions } from "../../actions/input";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../actions/login";

function SignUp() {

  const navigate = useNavigate();

  const valid = useSelector((state: any) => state.signUpInput.valid);

  const value = useSelector((state: any) => state.signUpInput.inputValue);

  const dispatch = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateInput(e.target.value));
    dispatch(inputActions.verifyIfIsInvalid());
  }

  function handleOnClick() {
    dispatch(loginActions.setUser(value));
    navigate(`/posts/${value}`);
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <Title>Welcome to CodeLeap network!</Title>

        <p>Please enter your username</p>
        <div className={style.inputBox}>
          <Input
            placeholder="John Doe"
            text=""
            type="text"
            styles={{ alignSelf: "stretch", marginBottom: "16px" }}
            value={value}
            onChange={handleInputChange}
          />
          <Button onClick={handleOnClick} disabled={!valid}>ENTER</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
