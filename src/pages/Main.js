import React from 'react';
import MainStructure from 'components/structure/MainStructure';
import MainComponent from 'components/structure/Main';
import NaverCallback from 'components/naver/NaverCallback.js'
import EmailConfirm from 'components/auth/confirm/EmailConfirm'
import ConfirmResult from 'components/auth/confirm/ConfirmResult'
import ConfirmDelete from 'components/auth/confirm/ConfirmDelete'
import FindForm from 'components/auth/FindForm'
import UserInfo from 'components/user/UserInfo'
import TermOfUse from 'components/user/TermOfUse'
import PrivacyPolicy from 'components/user/PrivacyPolicy'
import { Register, Auth, NotFound, Kit} from 'pages/';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Basename } from 'config';
const Main = () => {
    return (
      <Router basename={Basename}>
        <MainStructure>
          <Switch>
            <Route path='/auth/naver/callback' exact={true} component={NaverCallback} />
            <Route path="/" exact={true} component={MainComponent}/>
            <Route path="/kit" exact={true} component={Kit}/>
            <Route path='/auth/login' exact={true} component={Auth} />
            <Route path='/auth/register' exact={true} component={Register} />
            <Route path='/auth/confirm/email' exact={true} component={EmailConfirm} />
            <Route path='/auth/confirm/result' exact={true} component={ConfirmResult} />
            <Route path='/auth/confirm/delete' exact={true} component={ConfirmDelete} />
            <Route path='/auth/find' exact={true} component={FindForm} />
            <Route path='/user/info' exact={true} component={UserInfo} />
            <Route path='/user/pp' exact={true} component={PrivacyPolicy} />
            <Route path='/user/tou' exact={true} component={TermOfUse} />
            <Route component={NotFound} />
          </Switch>
        </MainStructure>
      </Router>
      
    );
  };
  
  export default Main;