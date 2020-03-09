import React, {useState, useEffect} from "react";
import styles from "./RegisterForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

//css
import '../main.css';
import '../util.css';

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
          <div className="invalid-feedback d-block">영문,숫자,특수문자를 혼합하여 8자리~20자리 이내 비밀번호</div>
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
        setErrorMessage2('');
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
  <main>
    {/* <div className={cx("auth-form")}>
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
      <div id="naver_id_login"></div>
    </div> */}

    <div className="new">
 

<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Sign up
					</span>

					<div className="wrap-input100 validate-input text-left" data-validate = "이메일을 입력해주세요.">
						<span className="label-input100">이메일</span>
            <input
          className={`input100 ${inputClassNameHelper(isEnteredEmailValid())}`}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>
          {renderEmailFeedbackMessage()}
          {'　'}
					<div className="wrap-input100 validate-input text-left" data-validate="비밀번호를 입력해주세요.">
						<span className="label-input100">비밀번호</span>
            <input
          className={`input100 ${inputClassNameHelper(isEnteredPasswordValid())}`}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>
          {renderPasswordFeedbackMessage()}
         {'　'}
          <div className="wrap-input100 validate-input text-left" data-validate="비밀번호를 입력해주세요.">
						<span className="label-input100">비밀번호 확인</span>
            <input
          className={`input100 ${confirmPasswordClassName}`}
          type="password"
          name="password2"
          value={confirmPassword}
          onChange={handleOnConfirmPassword}
          onKeyPress={handleKeyPress}
        />
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>
          {renderFeedbackMessage}
					
					<div className="text-right p-t-8 p-b-31">
						{/* <a href="#">
							비밀번호 찾기
						</a> */}
						<a href="#" className="txt2">
							&nbsp; <b><Link to={`/auth/login`} className={cx("description")}>
          로그인
        </Link></b>
						</a>
					</div>
          <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
      <div className={cx("error")}>
          <div className={cx("message")}>{errorMessage2}</div>
        
      </div>
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
              <div className="login100-form-btn" 
                onClick={handleRegister}
              >
								SIGN UP
							</div>
						</div>
					</div>
          {/* {renderFeedbackMessage()} */}
					{/* <div className="txt1 text-center p-b-17 p-t-54">
						<span>
							또는
						</span>
					</div>

					<div className="flex-c-m">

						<a href="#">
							<button>
                <img className="login100-form-btn" onClick={loginToNaverID} src={require('assets/img/NAVER.svg')} alt="Naver"/>
							</button>
						</a>
					</div> */}

					<div className="flex-col-c p-t-55">
						<a href="/" className="txt2">
							첫화면으로 돌아가기
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

  </main>
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
