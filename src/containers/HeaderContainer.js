import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/structure/Header'
import * as authActions from 'store/modules/auth';
import { useAlert } from 'react-alert'
import { withRouter } from 'react-router';

export class HeaderContainer extends Component {
    handleLoginOut = () => {
        const { logout } = this.props;
        const { logged } = this.props;
        if(logged) {
            logout();
        }else {
            let path = `/auth/login`;
            this.props.history.push(path);
        }
        
       
    };
    render() {
      
        const { handleLoginOut } = this;
        const { logged } = this.props;
        let loginStatus = "로그인";
        if (logged) {
           
            loginStatus = "로그아웃";
        }else {
            loginStatus = "로그인";
        }
        
        

        return <Header onLoginOut={handleLoginOut} loginStatus={loginStatus}/>;
    }
}

const mapStateToProps = state => ({
    logged : state.auth.logged
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(authActions.logout());
        },
        checkUser: () => {
            dispatch(authActions.checkUser());
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer));