import React, { Component } from 'react';
import './ConfirmDelete.css'

export class ConfirmDelete extends Component {
    render () {
        let msg = '탈퇴 처리가 완료 되었습니다.'
        return (
                 <div className = 'cd-container'>
                <p>{msg}</p>
                <button className = 'cd-btn' onClick={()=>this.props.history.push('/')}>메인 화면으로 이동</button>
            </div>
        )
    }
}

export default ConfirmDelete;