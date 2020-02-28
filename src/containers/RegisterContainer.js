import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterForm from "components/auth/RegisterForm";
import { withRouter } from "react-router-dom";
import * as authActions from "store/modules/auth";
import Popup from 'reactjs-popup';
//import 'bootstrap'
//import 'lib/bootstrap/css/bootstrap.css'

export class RegisterContainer extends Component {
    state = {
        confirmPassword: '',
        open: false ,
        registerMessage : '',
        emailEntered: '',
        isEmailValid: false,
    }
    openModal = this.openModal.bind(this);
    closeModal = this.closeModal.bind(this);
    openModal(message) {
        this.setState({ open: true, registerMessage: message });
      }
    closeModal() {
        this.setState({ open: false });
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
        if (prevProps.registered !== this.props.registered && this.props.registered) {
            //logged가 true가 되면 localStorage에 값을 저장합니다.
            // localStorage.setItem(
            //     "userInfo",
            //     JSON.stringify({
            //         id: this.props.userInfo.id,
            //         username: this.props.userInfo.username,
            //         token: this.props.userInfo.token,
            //         type: this.props.userInfo.type,
            //     })
            // );
            // 값을 저장 후, 메일 확인 안내 문구 페이지로 이동시켜준다.
            history.push({
              pathname: "/auth/confirm/email",
              state: { username : this.props.userInfo.username,
                        id : this.props.userInfo.id
              }
            });
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
                this.openModal('비밀번호가 일치하지 않습니다.');
            }else {
                const { register } = this.props;
                register();
            }
        }else {
            console.log('');
            //등록 요청 실패 alert 띄우기
        }

        
      };
      
      doesPasswordMatch() {
          const { password } = this.props;
          const { confirmPassword } = this.state;
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
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal1">
          {this.state.registerMessage}
          <div>
            <button className="close1" onClick={this.closeModal}>
              &times;
              닫기
            </button>
            </div>
          </div>
        </Popup>
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
    registered: state.auth.registered,
    username: state.auth.form.username,
    password: state.auth.form.password,
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
  