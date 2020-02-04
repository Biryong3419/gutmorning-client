import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterForm from "components/auth/RegisterForm";
import { withRouter } from "react-router-dom";
import * as authActions from "store/modules/auth";

import 'bootstrap'
import 'lib/bootstrap/css/bootstrap.css'

export class RegisterContainer extends Component {
    state = {
        confirmPassword: ''
    }

    componentDidMount() {
        this.initialize();
    }

    componentDidUpdate(prevProps, prevState) {
        // 하단에 AuthContainer를 withRouter로 감쌌기 때문에, history를 props로 이용할 수 있다.
        const { history } = this.props;
    
        if (prevProps.kind !== this.props.kind) {
          this.initialize();
        }
    
        if (prevProps.logged !== this.props.logged && this.props.logged) {
            //logged가 true가 되면 localStorage에 값을 저장합니다.
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    id: this.props.userInfo.id,
                    username: this.props.userInfo.username,
                    token: this.props.userInfo.token
                })
            );
            // 값을 저장 후, main페이지로 이동시켜준다.
            history.push("/");
        }
      }

      initialize = () => {
        const { initializeInput, initializeError } = this.props;
        initializeError();
        initializeInput();
      };

      handleChangeInput = ({ name, value }) => {
        const { changeInput } = this.props;
        changeInput({ name, value });
      };

      handleRegister = () => {
        const { confirmPassword } = this.state;
        if (confirmPassword) {
            if (!this.doesPasswordMatch()) {
            return(
              <div className="invalid-feedback d-block">패스워드가 일치하지 않습니다</div>
            );
          }else {
            const { register } = this.props;
           // register();
          }
        }else {
            console.log('');
            //등록 요청 실패 alert 띄우기
        }

        
      };
      
      doesPasswordMatch() {
          const { password, confirmPassword } = this.state;
          return password === confirmPassword;
      }

      handleOnConfirmPassword = ({ value}) => {
          this.setState({ confirmPassword: value})
      }

      confirmPasswordClassName() {
        const { confirmPassword } = this.state;
    
        if (confirmPassword) {
          return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
        }
      }

      renderFeedbackMessage() {
        const { confirmPassword } = this.state;
        if (confirmPassword) {
            
            if (!this.doesPasswordMatch()) {
            return(
              <div className="invalid-feedback d-block">패스워드가 일치하지 않습니다</div>
            );
          }
        }
      }

      render() {
        const { username, password, error } = this.props;
        const {handleOnConfirmPassword, handleChangeInput, handleLogin, handleRegister } = this;
        const { confirmPassword } = this.state;
        return (
            <div>
          <RegisterForm
            username={username}
            password={password}
            confirmPassword = {confirmPassword}
            onConfirmPassword = {handleOnConfirmPassword}
            onChangeInput={handleChangeInput}
            onLogin={handleLogin}
            confirmPasswordClassName={this.confirmPasswordClassName()}
            onRegister={handleRegister}
            error={error}
            renderFeedbackMessage = {this.renderFeedbackMessage()}
          />
         
          </div>
        );
      }
}


const mapStateToProps = state => ({
    username: state.auth.form.username,
    password: state.auth.form.password,
    confirmPassword: '',
    userInfo: state.auth.userInfo,
    logged: state.auth.logged,
    error: state.auth.error
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      initializeInput: () => {
        dispatch(authActions.initializeInput());
      },
      changeInput: ({ name, value }) => {
        dispatch(authActions.changeInput({ name, value }));
      },
      initializeError: () => {
        dispatch(authActions.initializeError());
      },
      register: () => {
        dispatch(authActions.register());
      },
      login: () => {
        dispatch(authActions.login());
      }
    };
  };
  

export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(RegisterContainer)
  );
  