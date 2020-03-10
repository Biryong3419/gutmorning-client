import history from 'helpers/history';
import React, {useState} from "react";
import styles from "./AuthForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { NaverConfigs } from 'config';

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
          e.preventDefault()
    }
  };

  let title='로그인'
  const loginToNaverID = () => {
    // var client_id = 'WjfwfaKdlTu60tbS6tTL'
    // var redirectURI = encodeURI(NaverConfigs.NaverCallbackUrl)
    const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NaverConfigs.NaverClientId}&redirect_uri=${NaverConfigs.NaverCallbackUrl}&state=${NaverConfigs.NaverState}`
    window.open(url)
    history.push('/')
    // axios.get(url).then(response =>{
    //   window.open("",response.data.view)
    // });
  }
  return (
<main>
    {/* <div className = 'before'>
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
        <div><input type='button' onClick={loginToNaverID} value='네이버 아이디로 로그인'/></div>
          <a className="return" href="/">메인화면 돌아가기</a>
    </div>
    </div> */}

    
<div className="new">

<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Login
					</span>

					<div className="wrap-input100 validate-input m-b-23 text-left" data-validate = "이메일을 입력해주세요.">
						<span className="label-input100">이메일</span>
						<input className="input100" 
                   type="text"
                   name="username"
                   value={username}
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
            />
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div className="wrap-input100 validate-input text-left" data-validate="비밀번호를 입력해주세요.">
						<span className="label-input100">비밀번호</span>
						<input className="input100"
             type="password"
             name="password"
             value={password}
             onChange={handleChange}
             onKeyPress={handleKeyPress}
            />
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
					<div className="text-right p-t-8 p-b-31">
						<Link to={`/auth/find`}>
							비밀번호 찾기
						</Link>
						<a href="#" className="txt2">
							&nbsp; <b><Link to={`/auth/register`} className={cx("description")}>
          회원가입
        </Link></b>
						</a>
					</div>
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<div className="login100-form-btn" onClick={handleLogin}>
								Login
							</div>
						</div>
					</div>
          <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
          {renderFeedbackMessage()}
					<div className="txt1 text-center p-b-17 p-t-54">
						<span>
							또는
						</span>
					</div>

					<div className="flex-c-m">

							<button><img className="login100-form-btn" 
              onClick=
              {()=>alert('점검 중 입니다.')}
              //{loginToNaverID} 
              src={require('assets/img/NAVER.svg')} alt="Naver"/>
							</button>
					</div>

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



// class NaverLogin extends React.Component {

//   componentDidMount() {
//     var naver_id_login = new window.naver_id_login(client_id, redirectURI)
//     var state = naver_id_login.getUniqState()
//     console.log(state)
//   	naver_id_login.setButton("white", 2,40)
//   	naver_id_login.setDomain("http://localhost:3000")
//   	naver_id_login.setState(state)
//   	naver_id_login.init_naver_id_login()
//   }

//   render() {
//     return <div id="naver_id_login"></div>
//   }

// }



export default AuthForm;