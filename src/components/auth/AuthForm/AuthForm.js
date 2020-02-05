import React, {useState, useEffect} from "react";
import styles from "./AuthForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const inputClassNameHelper = boolean => {
  switch (boolean) {
    case true:
      return 'is-valid';
    case false:
      return 'is-invalid';
    default:
      return '';
  }
};

const AuthForm = ({
  onChangeInput,
  username,
  password,
  onLogin,
  error
}) => {
 
  const [emailEntered, setEmailEntered] = useState('');
  const [passwordEntered, setPasswordEntered] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const renderFeedbackMessage = () => {
    console.log('@#!@#')
    if (errorMessage2.length>0) {
        return(
          <div className="invalid-feedback d-block">{errorMessage2}</div>
        );
    }
  }
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });

    // Email format check
    if(name=='username') {
      setEmailEntered(value);
    }
    if(name=='password') {
      setPasswordEntered(value);
    }
  };

  const handleLogin = () => {
    if (emailEntered.length <1) {
      console.log('!!')
      setErrorMessage2('이메일을 입력해 주세요.');
      setTimeout(()=> {
        setErrorMessage2('');
     }, 5000)
      return;
    }
    if (passwordEntered.length <1) {
      setErrorMessage2('비밀번호를 입력해 주세요.');
      setTimeout(()=> {
        setErrorMessage2('');
     }, 5000)
      return;
    }
    onLogin();
  }
  const handleKeyPress = e => {
    if (e.key === "Enter") {
          handleLogin();
    }
  };

  let title='로그인'

  return (
    <div className={cx("auth-form")}>
      <div className={cx("auth-title")}>GutMorning</div>
    
      <div className={cx("line-wrapper")}>
        <div className={cx("input-id")}>이메일 주소</div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-pass")}>비밀번호</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
        <div className={cx("auth-button")} onClick={handleLogin}>
          {title}
        </div>
        <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
          {renderFeedbackMessage()}
        <Link to={`/auth/register`} className={cx("description")}>
          회원가입
        </Link>
     
          <a className="return" href="/">메인화면 돌아가기</a>
    </div>
  );
};

export default AuthForm;
