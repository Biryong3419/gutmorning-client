import React, { Component, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from 'config';
import './UserInfo.css';
import { withRouter } from "react-router-dom";
import * as authActions from "store/modules/auth";
import { connect } from "react-redux";
import { withAlert } from 'react-alert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originPasswordEntered:'',
            passwordEntered:'',
            confirmPasswordEntered:'',
            passwordForDelete:'',
            errorMessage2:'',
            errorMessage3:'',
            showModal: false,
            showModal2: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    }

  
    renderPasswordFeedbackMessage = () => {
        if (this.state.passwordEntered.length>0 && !this.validatePassword(this.state.passwordEntered)) {
            return(
                <div className="invalid-feedback d-block">영문,숫자,특수문자를 혼합하여 8자리~20자리 이내 비밀번호</div>
            );
        }
    }
    renderPasswordConfirmFeedbackMessage = () => {
        if (this.state.confirmPasswordEntered.length>0) {
            if (this.state.confirmPasswordEntered != this.state.passwordEntered)
             return(
              <div className="invalid-feedback d-block">패스워드가 일치하지 않습니다</div>
                );
        }
    }
    renderUserDeleteFeedbackMessage = () => {
        if (this.state.confirmPasswordEntered.length>0) {
            if (this.state.confirmPasswordEntered != this.state.passwordEntered)
             return(
              <div className="invalid-feedback d-block">패스워드가 일치하지 않습니다</div>
                );
        }
    }
    renderErrorMessage = () => {
         return(
              <div className="invalid-feedback d-block">{this.state.errorMessage2}</div>
                );
    }
    renderErrorMessageInModal = () => {
         return(
              <div className="invalid-feedback d-block">{this.state.errorMessage3}</div>
                );
    }
    validatePassword = passwordToCheck => {
        if (chkPwd(passwordToCheck)) {
            return true;
            //this.setState({isPasswordValid:true});
        } else {
             return false
            //this.setState({isPasswordValid:false}); 
        }
    };

    
    handleSubmit = event => {
        event.preventDefault()
         if(!this.state.originPasswordEntered) {
            this.setState({errorMessage2:'현재 비밀번호를 입력해 주세요'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }
         if(!this.state.passwordEntered) {
            this.setState({errorMessage2:'새 비밀번호를 입력해 주세요'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }

        if(!this.validatePassword(this.state.passwordEntered)) {
            this.setState({errorMessage2:'비밀번호 형식을 확인해 주세요'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }
           if(this.state.confirmPasswordEntered != this.state.passwordEntered) {
            this.setState({errorMessage2:'패스워드가 일치하지 않습니다'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }
        const currentPassword = this.state.originPasswordEntered;
        const newPassword= this.state.passwordEntered;
        if (currentPassword == newPassword) {
            this.setState({errorMessage2:'기존 비밀번호와 다른 새 비밀번호를 입력해 주십시오.'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
            return;
        }

        // const currentPassword = 'aaa1234!';
        // const newPassword= 'bbb';

        this.props.updateUser({currentPassword, newPassword});
    }

    handleChange = e => {
        const { name, value } = e.target;
        // onChangeInput({ name, value });

        if(name=='password0') {
            this.setState({originPasswordEntered:value})
        }

        if(name=='password') {
            this.setState({passwordEntered:value})
        }
        
        if(name=='password2') {
            this.setState({confirmPasswordEntered:value})
        }
        if(name=='passwordForDelete') {
            this.setState({passwordForDelete:value})
        }
    };
    
    handleKeyPress = e => {
        if (e.key === "Enter") {
            if(e.target.name == 'passwordForDelete') {
                this.deleteUser();
            }else{
                this.handleSubmit(e);
            }
        }
    };
    
    // changePassword = () => {
    //     console.log('비밀번호 변경 요청!')
        
    //     // 1.서버로 요청 날리기
    //     // 페이로드 : 현재 비밀번호, 유저이메일, 유저아이디 ,토큰

    //     // 헤더 넣어서날리기(인증)
    //     axios.put(ApiUrl+'/api/auth/user/')
    //         .then(res => {
    //             console.log('userInfo success')
    //         }).catch(err => {
    //             console.log('userInfo error')
    //         })

    //     //현재 비밀번호가 유효한지 확인
    // }
    clearForm = () => {
        document.getElementById('myForm').reset();
        this.setState({
             originPasswordEntered:'',
            passwordEntered:'',
            confirmPasswordEntered:'',
            passwordForDelete:'',
            errorMessage2:'',
            errorMessage3:'',
        })
    }

    componentDidUpdate () {
        const statusCode = this.props.statusCode
        if (statusCode == 400) {
            this.props.initializeStatusCode();
            this.setState({errorMessage2:'현재 비밀번호가 올바르지 않습니다.'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
        } 
        else if (statusCode == 200) {
            this.props.initializeStatusCode();
            this.clearForm();
            this.setState({showModal2:true})
            // this.setState({originPasswordEntered:''})
            // this.setState({passwordEntered:''})

            this.setState({errorMessage2:'비밀번호 변경 완료.'})
            setTimeout(()=> {
            this.setState({errorMessage2:''})
            }, 3000)
        }
    }
    
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }
    handleCloseModal2 () {
        this.setState({ showModal2: false });
    }

    deleteUser = () => {
        const passwordForDelete = this.state.passwordForDelete;
        
        if(passwordForDelete.length < 1) {
            this.setState({errorMessage3:'현재 비밀번호를 입력해 주세요.'})
            setTimeout(()=> {
            this.setState({errorMessage3:''})
            }, 3000)
            return;
        }

        let userInfo = null;
        if (localStorage.getItem('userInfo')) {
            userInfo = JSON.parse(localStorage.getItem('userInfo'));
        } 
        else {
            alert('접속 정보가 존재하지 않습니다.')
            this.props.history.push('/')
            return;
        }

        const headers = {'Content-Type': 'application/json', Authorization: `token ${userInfo.token}`}
        const data = {'passwordForDelete':passwordForDelete}
        axios.delete(ApiUrl + '/api/auth/user/', {data, headers})
            .then(res=>{
                //this.props.logout();
                this.props.updateStatusCode(33);
                this.props.logout();
               // this.props.history.push('/auth/confirm/delete')
            }).catch(err => {
                this.setState({errorMessage3:'비밀번호가 올바르지 않습니다.'})
                setTimeout(()=> {
                this.setState({errorMessage3:''})
                }, 3000)
                return;
            })
        
    }
    render () {
       

        let username = ''
        let id = ''
        // localStorage에서 이메일 주소를 가져온다.
        if (localStorage.getItem('userInfo')) {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            username = userInfo.username;
            id = userInfo.id;
        }else {
            // 현재정보가 없으면 로그인 페이지 이동.
            this.props.history.push('/auth/login')
        }

        return (
            <div className="container container-ui">
    <div className="view-account">
        <section className="module">
            <div className="module-inner">
                            <h3 className="fieldset-title mb-5">회원정보</h3>
                          <form id='myForm'>
                            <div className="form-group">
                                  <div className='password-change-form col-md-5 center-align'>
                                <label className="col-md-12 col-sm-12 col-xs-12 control-label">이메일</label>
                                {'　'}
                                <div className="col-md-12 col-sm-12 col-xs-12 center-align" >
                                    <input type="text" className="form-control" defaultValue={username} readOnly/>
                                </div>
                            </div>
                            </div>
                            <div className='password-change-form col-md-5 center-align'>
                                <div className="form-group">
                                    <label className="col-md-12 col-sm-12 col-xs-12 control-label">비밀번호 변경</label>
                                          {'　'}
                                    <div className="col-md-12 col-sm-12 col-xs-12 center-align">
                                        <input type="text" className="form-control" type="password" 
                                        name="password0"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress} 
                                        placeholder="현재 비밀번호"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12 col-sm-12 col-xs-12 center-align">
                                        <input type="text" className="form-control" 
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress} 
                                        placeholder="새 비밀번호"/>
                                    </div>
                                    {this.renderPasswordFeedbackMessage()}
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12 col-sm-12 col-xs-12 center-align">
                                        <input type="text" className="form-control"
                                        type="password"
                                        name="password2"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress}
                                        placeholder="새 비밀번호 확인"/>
                                    </div>
                                    {this.renderPasswordConfirmFeedbackMessage()}
                                </div>
                                {'　'}
                                <div className="form-group">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                        <button className="btn btn-primary" onClick={this.handleSubmit}>수정하기</button>
                                    </div>
                                    {this.renderErrorMessage()}
                                </div>
                            </div>
                            </form>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.handleOpenModal}> 회원탈퇴</button></div>

      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>회원탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = 'ml-4 '>탈퇴하시려면 현재 비밀번호를 입력해 주세요.</div>
        <div className = 'ml-4'>탈퇴 시 지워진 정보는 복구되지 않습니다.</div>
        {'　'}
                   <div className="col-md-12 col-sm-12 col-xs-12 center-align">
                                        <input type="text" className="form-control" type="password" 
                                        name="passwordForDelete"
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress} 
                                        placeholder="현재 비밀번호"/>
                                    </div>
                                <div className='ml-4'>{this.renderErrorMessageInModal()}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseModal}>
            취소
          </Button>
          <Button variant="primary" onClick={this.deleteUser}>
            탈퇴하기
          </Button>
        </Modal.Footer>
      </Modal>



            <Modal show={this.state.showModal2} onHide={this.handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = 'ml-4 '>비밀번호 변경이 완료되었습니다.</div>
        {'　'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseModal2}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>


            </div>
        </section>
    </div>
</div>
        )
    }
}
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    height                : '300px',
    width                 : '400px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function chkPwd(str){
  var pw = str;
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/ig);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  if(pw.length < 8 || pw.length > 20){
   //alert("8자리 ~ 20자리 이내로 입력해주세요.");
   return false;
  }
  if(pw.search(/₩s/) != -1){
   //alert("비밀번호는 공백업이 입력해주세요.");
   return false;
  } 
  if(num < 0 || eng < 0 || spe < 0 ){
   //alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
   return false;
  }
  return true;
 }

 const mapStateToProps = state => ({
  logged: state.auth.logged,
  statusCode : state.auth.statusCode,
});

const mapDispatchToProps = dispatch => {
  return {
    updateUser: ({currentPassword, newPassword}) => {
      dispatch(authActions.updateUser({currentPassword, newPassword}));
    },
    initializeStatusCode: () => {
        dispatch(authActions.initializeStatusCode());
    },
    updateStatusCode: statusCode => {
        dispatch(authActions.updateStatusCode(statusCode));
    },
    logout: () => {
        dispatch(authActions.logout());
    }
  };
};

const a = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserInfo)
);
export default withAlert()(a);