import React from 'react';
import MainStructure from 'components/structure/MainStructure';
import MainComponent from 'components/structure/Main';
import NaverCallback from 'components/naver/NaverCallback.js'
import { Register,Auth, NotFound, Kit} from 'pages/';
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
            
            <Route component={NotFound} />
            </Switch>
        </MainStructure>
  
      </Router>
      
    );
  };
  
  export default Main;