import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as authActions from '../store/modules/auth';
import { withRouter } from 'react-router-dom';
import { NaverConfigs, ApiUrl } from 'config';

var client_id = 'WjfwfaKdlTu60tbS6tTL'
var redirectURI = encodeURI(NaverConfigs.NaverCallbackUrl)

export class BaseContainer extends Component {

    state = {
        nickname: ''
    }

    constructor(props) {
        super(props)
        window.naverSignInCallback = this.naverSignInCallback.bind(this)
    }

    naverSignInCallback =() => {
        console.log('navercallback')
        var naver_id_login = new window.naver_id_login(client_id, redirectURI)
        //첫 로그인
        if(!localStorage.getItem('userInfo')){
            let date = new Date();
            date.setMinutes(date.getMinutes()+60)
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    id: naver_id_login.getProfileData('email'),
                    username: naver_id_login.getProfileData('id'),
                    token: naver_id_login.oauthParams.access_token,
                    createTime: date,
                    type: 'naver'
                })
            );
        }
        //기존 정보 있을 경우
        else if(localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token != naver_id_login.oauthParams.access_token){
            let date = new Date();
            date.setMinutes(date.getMinutes + 60);
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    id: naver_id_login.getProfileData('email'),
                    username: naver_id_login.getProfileData('id'),
                    token: naver_id_login.oauthParams.access_token,
                    createTime: date,
                    type: 'naver'
                })
            );
        }
    }  

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.logged !== this.props.logged && !this.props.logged) {
            window.location.href = '/auth/login';
        }
        const { logged, logout } = this.props;
        if(!logged){
            logout();
        }
    }

    componentDidMount() {
        var naver_id_login = new window.naver_id_login(client_id, redirectURI)
        if(naver_id_login.oauthParams.access_token){
            //naver_id_login.get_naver_userprofile("")
            this.naverSignInCallback()
        }
        this.checkUser();
    }

    checkUser() {
        const { checkUser, setUserTemp, history, logout } = this.props;
        // 먼저 localStorage에 값이 저장되있는지 확인, 
        // userInfo값이 있다면, 로그인을 한 것으로 인식하고 바로 setUserTemp 수행
        // 목적은 새로고침 할때, state가 초기화 되면서 logged값이 false로 바뀌는데, 
        // 로그인을 유지하기 위함.
        if (localStorage.getItem('userInfo')) {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            setUserTemp({
                id: userInfo.id,
                username: userInfo.username,
                token: userInfo.token
            });
            // localstorage에 정보가 있는 경우 요청 진행.
            if (userInfo.token){
                //토큰생성시각 체크해서 기준 시간이 지났을경우 logout 진행.
                checkUser();
            }else {
                logout();
            }
            return;
        }
        
        // 만약 checkUser가 실패할 경우, logged는 false로 바뀌므로, 로그인 페이지로 이동한다.
        // 또한, /auth/register에서는 /auth/login으로 이동할 필요가 없으므로, auth라는 path가 url에 포함될때는 제외 시킨다.
        // if(!this.props.logged && !window.location.pathname.includes("auth")) {
        //     history.push("/auth/login");
        // }
    };

    render() {
        return <div />;
    }
}

const mapStateToProps = state => ({
    logged: state.auth.logged
    
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(authActions.logout());
        },
        checkUser: () => {
            dispatch(authActions.checkUser());
        },
        setUserTemp: ({ id, username }) => {
            dispatch(authActions.setUserTemp({ id, username }));
        }
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(BaseContainer)
);