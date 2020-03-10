import React, { Component } from 'react';
import axios from 'axios';
import { ApiUrl } from 'config';
import { Link } from "react-router-dom";

import './FindForm.css';

class FindForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid : false,
            emailEntered : '',
            errorMessage2:'',
        }
    }

    validateEmail = emailEntered => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  
    if (emailEntered.match(emailRegExp)) {
        this.setState({isEmailValid:true});   
    } else {
      this.setState({isEmailValid:false});   
    }
  };
    renderErrorMessage = () => {
         return(
              <div className="invalid-feedback d-block">{this.state.errorMessage2}</div>
                );
    }
  handleKeyPress = e => {
    if (e.key === "Enter") {
        this.submit();
      }
  };
    submit = () =>  {
          if(!this.state.emailEntered) {
            this.setState({errorMessage2:'이메일 주소를 입력해 주세요.'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }
        if (!this.state.isEmailValid) {
             this.setState({errorMessage2:'올바른 형식의 이메일 주소를 입력해 주세요.'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }
        const emailEntered = this.state.emailEntered

        const params = {'emailEntered':emailEntered}
            axios.get(ApiUrl + '/api/auth/user/find/', {params})
            .then(res=>{
               this.props.history.push('/auth/confirm/result?message=newpass')
            }).catch(err => {
                this.setState({errorMessage2:'존재하지 않는 이메일 주소 입니다.'})
                setTimeout(()=> {
                this.setState({errorMessage2:''})
                }, 3000)
                return;
            })
    }
  handleChange = e => {
    const { name, value } = e.target;

    // Email format check
    if(name=='email') {
        this.setState({emailEntered:value});
        this.validateEmail(value);
    }
  };
    renderEmailFeedbackMessage ()  {
        if (!this.state.isEmailValid && this.state.emailEntered.length>0) {
         return(
                <div className="invalid-feedback d-block">영문,숫자,특수문자를 혼합하여 8자리~20자리 이내 비밀번호</div>
            );
        }
    }
    render() {
           let msg = '아이디(이메일 주소)를 입력해 주세요.';
        return (
                 <div className = 'ff-container'>
                     <h1 className='mb-5'>비밀번호 찾기</h1>
                <p>{msg}</p>
            	   <div className="email-box center-align" >
                                    <input type="text" className="form-control"
                                    //  defaultValue={username} 
                                     type="text"
          name="email"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
                                   />
                                </div>
                                {this.renderEmailFeedbackMessage()}
                                    {this.renderErrorMessage()}
                                
               <div>
                    <button className = 'mt-4 mb-3 ff-btn' onClick={this.submit}>비밀번호  찾기</button>
                    </div>
                  
                <div><Link to={`/auth/login`}>로그인 화면으로 이동</Link></div>
            </div>
        )
    }
}

export default FindForm