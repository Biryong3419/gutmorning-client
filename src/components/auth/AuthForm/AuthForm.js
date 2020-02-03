import React from "react";
import styles from "./AuthForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const AuthForm = ({
  kind,
  onChangeInput,
  username,
  password,
  onLogin,
  onRegister,
  error
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      switch (kind) {
        case "register":
          onRegister();
          return;
        case "login":
          onLogin();
          return;
        default:
          return;
      }
    }
  };

  let title=''
  if (kind == 'register') {
    title = '회원등록';
  }
  else if (kind =='login') {
    title = '로그인';
  }

  return (
    <div className={cx("auth-form")}>
      <div className={cx("title")}>GutMorning</div>
      <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
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
      {kind === "register" ? (
        <div className={cx("auth-button")} onClick={onRegister}>
          {title}
        </div>
      ) : (
        <div className={cx("auth-button")} onClick={onLogin}>
          {title}
        </div>
      )}
      {kind === "register" ? (
        <Link to={`/auth/login`} className={cx("description")}>
          if you already have account...
        </Link>
      ) : (
        <Link to={`/auth/register`} className={cx("description")}>
          if you don't have an account...
        </Link>
      )}
          <a className="return" href="/">메인화면 돌아가기</a>
    </div>
  );
};

export default AuthForm;
