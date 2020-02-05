import React from 'react';
import MainStructure from 'components/structure/MainStructure';
import MainComponent from 'components/structure/Main';
import BaseContainer from 'containers/BaseContainer'
import { Register,Auth, NotFound, Kit} from 'pages/';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
const Main = () => {
    return (
      
           <Router basename={'/GutMorning'}>
             <MainStructure>
        <Switch>
        <Route path="/" exact={true} component={MainComponent}/>
        <Route path="/kit" exact={true} component={Kit}/>
        <Route path='/auth/login' exact={true} component={Auth} />
        <Route path='/auth/register' exact={true} component={Register} />
        <Route component={NotFound} />
        </Switch>
      
        </MainStructure>
         <BaseContainer />
      </Router>
      
    );
  };
  
  export default Main;