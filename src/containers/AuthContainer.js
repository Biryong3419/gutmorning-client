import React, { Component } from "react";
import { connect } from "react-redux";
import AuthForm from "components/auth/AuthForm";
import { withRouter } from "react-router-dom";
import * as authActions from "store/modules/auth";

import 'fonts/iconic/css/material-design-iconic-font.min.css'

export class AuthContainer extends Component {
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
                token: this.props.userInfo.token,
                type: this.props.userInfo.type,
            })
        );
        // 값을 저장 후, main페이지로 이동시켜준다.
        history.push("/");
    }

    if (prevProps.statusCode !== this.props.statusCode && this.props.statusCode == 406) {
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
      // 값을 저장 후, main페이지로 이동시켜준다.
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

  handleLogin = () => {
    const { login } = this.props;
    login();
  };

  handleRegister = () => {
    const { register } = this.props;
    register();
  };
  render() {
    const { logged } = this.props;
    //로그인 상태일 경우 뒤로 돌아가기
    if (logged) {
        this.props.history.goBack();
    }
    const { username, password, error } = this.props;
    const { handleChangeInput, handleLogin, handleRegister } = this;
    return (
      <main>
        <AuthForm
        username={username}
        password={password}
        onChangeInput={handleChangeInput}
        onLogin={handleLogin}
        onRegister={handleRegister}
        error={error}
      />
        <div id="naver_id_login"></div>
      </main>
      
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.form.username,
  password: state.auth.form.password,
  userInfo: state.auth.userInfo,
  logged: state.auth.logged,
  statusCode : state.auth.statusCode,
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
  )(AuthContainer)
);
