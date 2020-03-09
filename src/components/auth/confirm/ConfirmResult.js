import React, { Component } from 'react';
import './ConfirmResult.css';
import queryString from 'query-string';

export class ConfirmResult extends Component {

    render () {
        let params = queryString.parse(this.props.location.search)
        let msg = '이메일 인증이 완료 되었습니다.'
        if(params.message) {
            if ('already' === params.message) {
                msg = '이미 인증된 이메일 입니다.';
            }
            else if ('wrong' === params.message) {
                msg = '잘못된 요청 입니다.';
            }
            else if ('newpass' === params.message) {
                msg = '새 비밀번호가 발급되었습니다. 이메일을 확인해 주세요.';
            }
        }

        return (
            <div className = 'cr-container'>
                <p>{msg}</p>
                <button className = 'cr-btn' onClick={()=>this.props.history.push('/auth/login')}>로그인 하기</button>
            </div>
        )
    }
}

export default ConfirmResult;