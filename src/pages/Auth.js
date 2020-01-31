import React from 'react';
import AuthContainer from '../containers/AuthContainer';

const Auth = ({ match }) => {
    // App.js /:kind로 설정해둔 값입니다.
    const { kind } = match.params;
    return (
        <div>
            <AuthContainer kind = {kind} />
            <a href="/">메인화면 돌아가기</a>
        </div>
       
    );
};

export default Auth;