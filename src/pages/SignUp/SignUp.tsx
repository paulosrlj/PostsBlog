import React from "react";

import style from "./style.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";

function SignUp() {
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
            styles={{ alignSelf: "stretch", marginBottom: '16px' }}
          />
          <Button>ENTER</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
