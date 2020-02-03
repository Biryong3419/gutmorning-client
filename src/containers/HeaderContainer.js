import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/structure/Header'
import * as authActions from 'store/modules/auth';
import { withAlert } from 'react-alert'

export class HeaderContainer extends Component {
    handleLoginOut = () => {
        const { logout } = this.props;
        logout();
       
    };
    render() {
        
        const { handleLoginOut } = this;
        const { logged } = this.props;
        let toUrl = '';
        let loginStatus = "로그인";
        if (logged) {
            loginStatus = "로그아웃";
        }else {
            loginStatus = "로그인";
            toUrl='/auth/login'
        }
        
        

        return <Header onLoginOut={handleLoginOut} loginStatus={loginStatus} toUrl={toUrl}/>;
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);