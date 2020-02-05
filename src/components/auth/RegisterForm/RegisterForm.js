import React, {useState, useEffect} from "react";
import styles from "./RegisterForm.scss";
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


const RegisterForm = ({
  onChangeInput,
  username,
  password,
  confirmPassword,
  onRegister,
  confirmPasswordClassName,
  onConfirmPassword,
  renderFeedbackMessage,
  error,
}) => {
  let title='회원등록'

  const [emailEntered, setEmailEntered] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage2, setErrorMessage2] = useState('');

  const renderEmailFeedbackMessage = () => {
    if (!isEmailValid && emailEntered.length>0) {
        return(
          <div className="invalid-feedback d-block">잘못된 이메일 형식 입니다.</div>
        );
    }
  }

  const renderPasswordFeedbackMessage = () => {
    if (!isPasswordValid && passwordEntered.length>0) {
        return(
          <div className="invalid-feedback d-block">영문,숫자,특수문자를 혼합하여 8자리~20자리 이내 비밀번호를 입력하세요.</div>
        );
    }
  }

  const validateEmail = emailEntered => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  
    if (emailEntered.match(emailRegExp)) {
      setIsEmailValid(true);   
    } else {
      setIsEmailValid(false);    
    }
  };

  const validatePassword = passwordEntered => {
    if (chkPwd(passwordEntered)) {
      setIsPasswordValid(true);   
    } else {
      setIsPasswordValid(false);    
    }
  };

  const isEnteredEmailValid = () => {
    if (emailEntered) return isEmailValid;
  };

  const isEnteredPasswordValid = () => {
    if (passwordEntered) return isPasswordValid;
  };
  const handleRegister = () => {
    if(!isEmailValid) {
      setErrorMessage2('이메일 형식을 확인해 주세요.');
      setTimeout(()=> {
        setErrorMessage2('');
     }, 3000)
      return;
    }
    if(!isPasswordValid) {
      setErrorMessage2('비밀번호 형식을 확인해 주세요.');
      setTimeout(()=> {
        setErrorMessage2('비밀번호 형식을 확인해 주세요.');
     }, 3000)
      return;
    }
    onRegister();
  }
  useEffect(() => {
    validateEmail(emailEntered);
    validatePassword(passwordEntered);
  });
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });

    // Email format check
    if(name=='username') {
      setEmailEntered(value);
    }
   
     // Password format check
     if(name=='password') {
      setPasswordEntered(value);
    }
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


  return (
    <div className={cx("auth-form")}>
      <div className={cx("auth-title")}>이메일로 가입하기</div>
  
      <div className={cx("line-wrapper")}>
        <div className={cx("input-id")}>이메일 주소</div>
        <input
          className={`form-control ${inputClassNameHelper(isEnteredEmailValid())}`}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {renderEmailFeedbackMessage()}
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-pass")}>비밀번호</div>
        <input
          className={`form-control ${inputClassNameHelper(isEnteredPasswordValid())}`}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {renderPasswordFeedbackMessage()}
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
  
        <div className={cx("auth-button")} onClick={handleRegister}>
          {title}
        </div>
        <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
      <div className={cx("error")}>
          <div className={cx("message")}>{errorMessage2}</div>
        
      </div>
        <Link to={`/auth/login`} className={cx("description")}>
          로그인
        </Link>
          <a className="return" href="/">메인화면 돌아가기</a>
    </div>
  );
};

function chkPwd(str){
  var pw = str;
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/ig);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  if(pw.length < 8 || pw.length > 20){
   //alert("8자리 ~ 20자리 이내로 입력해주세요.");
   return false;
  }
  if(pw.search(/₩s/) != -1){
   //alert("비밀번호는 공백업이 입력해주세요.");
   return false;
  } 
  if(num < 0 || eng < 0 || spe < 0 ){
   //alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
   return false;
  }
  return true;
 }

export default RegisterForm;
