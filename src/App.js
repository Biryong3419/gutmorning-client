import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Header from './pages/Header';
import { Main, Auth, NotFound, Kit, Footer} from './pages/';

import { Provider } from "react-redux";
import store from "./store/configure";

function App() {
  return (
    //사용자 작성 코드
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/kit" exact={true} component={Kit}/>
        
      
        <Route path='/auth/:kind' exact={true} component={Auth} />
        <Route component={NotFound} />
        </Switch>
        <Footer />
       
      </Router>
    </div>
    </Provider>
  );
}

export default App;
