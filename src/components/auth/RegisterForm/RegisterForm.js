import React from "react";
import styles from "./RegisterForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const RegisterForm = ({
  onChangeInput,
  username,
  password,
  confirmPassword,
  onRegister,
  confirmPasswordClassName,
  onConfirmPassword,
  renderFeedbackMessage,
  error
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
        onRegister();
      }
  };
  const handleOnConfirmPassword = e => {
    const { value } = e.target;
    onConfirmPassword({ value });
  };
  let title='회원등록'

  return (
    <div className={cx("auth-form")}>
      <div className={cx("auth-title")}>이메일로 가입하기</div>
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
      <div className={cx("line-wrapper")}>
        <div className={cx("input-pass")}>비밀번호 확인</div>
        <input
          className={`form-control ${confirmPasswordClassName}`}
          type="password"
          name="password2"
          value={confirmPassword}
          onChange={handleOnConfirmPassword}
          onKeyPress={handleKeyPress}
        />
        {renderFeedbackMessage}
      </div>
  
        <div className={cx("auth-button")} onClick={onRegister}>
          {title}
        </div>
    
        <Link to={`/auth/login`} className={cx("description")}>
          로그인
        </Link>
          <a className="return" href="/">메인화면 돌아가기</a>
    </div>
  );
};

export default RegisterForm;
