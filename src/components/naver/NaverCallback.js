import React, {Component} from 'react';
import { NaverConfigs, ApiUrl } from 'config';
import axios from 'axios';
var client_id = 'WjfwfaKdlTu60tbS6tTL'
var redirectURI = encodeURI(NaverConfigs.NaverCallbackUrl)

class NaverCallback extends Component {
    constructor(props) {
        super(props)
        window.naverSignInCallback = this.naverSignInCallback.bind(this);
    }

    naverSignInCallback =() => {
        console.log('navercallback')
        var naver_id_login = new window.naver_id_login(client_id, redirectURI);
        const code = naver_id_login.oauthParams.code;
        const state = naver_id_login.oauthParams.state;

        //첫 로그인
        if(!localStorage.getItem('userInfo')){
            axios.get(ApiUrl+'/api/auth/naver/login', {params: {"code":code, "state":state}})
            .then(res=> {
                console.log('@@', res.data.user,);
                // let date = new Date();
                // date.setMinutes(date.getMinutes()+60)
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        id:  res.data.user.id,
                        username:  res.data.user.username,
                        token:  res.data.token,
                        type: 'naver'
                    })
                    
                );
                //this.checkUser();
            }).catch(error => {
                console.log('naver login 에러 발생!')
            }).finally(()=>{
                window.opener.location.reload();
                window.close();
            })

        }
        //기존 정보 있을 경우
        // else if(localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token != naver_id_login.oauthParams.access_token){
        //     let date = new Date();
        //     date.setMinutes(date.getMinutes + 60);
        //     localStorage.setItem(
        //         "userInfo",
        //         JSON.stringify({
        //             id: naver_id_login.getProfileData('email'),
        //             username: naver_id_login.getProfileData('id'),
        //             token: naver_id_login.oauthParams.access_token,
        //             createTime: date,
        //             type: 'naver'
        //         })
        //     );
        // }
    }  

    componentDidMount() {
        var naver_id_login = new window.naver_id_login(client_id, redirectURI)
        if(naver_id_login.oauthParams.code){
            //naver_id_login.get_naver_userprofile("")
            this.naverSignInCallback()
        }else {
            alert('네이버 로그인 오류 발생')
            this.props.history.push('/')
        }
    }
   render () {
    return ( <div id="hero" className='container'>
</div>)
   }
                        };

export default NaverCallback; 