import React, { Component } from 'react';
import axios from 'axios';
import { ApiUrl } from 'config';
import './EmailConfirm.css';

export class EmailConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : '',
        }
    }
    reSendEmail = () => {
        const id = this.props.location.state.id;
        const username = this.props.location.state.username;
        axios.get(ApiUrl+'/api/auth/send/email', {params: {"id":id, "username":username}})
            .then(res=> {
                console.log('응답 성공')
                this.setState({message:'인증메일 재발송 완료'});
                // console.log('@@', res.data.user,);
                // // let date = new Date();
                // // date.setMinutes(date.getMinutes()+60)
                // localStorage.setItem(
                //     "userInfo",
                //     JSON.stringify({
                //         id:  res.data.user.id,
                //         username:  res.data.user.username,
                //         token:  res.data.token,
                //         type: 'naver'
                //     })
                    
                // );
                //this.checkUser();
            }).catch(error => {
                console.log('resendemail 에러 발생!')
            }).finally(()=>{
                // window.opener.location.reload();
                // window.close();
            })
    }
    componentWillMount() {
        if (!this.props.location.state || !this.props.location.state.username){
            this.props.history.push('/auth/login');
        }
    }
    render () {
        let message = '';
        return (
            <div className='ec-container'>
                <div>
                    <p>인증메일이 발송되었습니다.</p>
                <p>입력하신 이메일을 확인해주세요.</p>
                </div>
                <div>
                    <p>가입하신 메일로 인증메일이 발송되며, 메일을 확인하셔야 가입이 완료됩니다.</p>
                       <p> 인증메일 재발송이 필요한 경우 아래 버튼을 눌러주세요.   </p>
                 
                    <button className='ec-btn' onClick={this.reSendEmail} >인증메일 재발송</button>
                    <button className='ec-btn' 
                    onClick={()=>this.props.history.push('/auth/login')}
                >로그인</button>
                </div>
                {this.state.message}
            </div>
        )
    }
}

export default EmailConfirm