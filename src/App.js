import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/configure";
import Main from 'pages/Main';
import PrivacyPolicy from 'components/user/PrivacyPolicy'
import TermOfUse from 'components/user/TermOfUse'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    //사용자 작성 코드
    <Provider store={store}>
    <div className="App">
       <Router>
         <Switch>
           {/* 헤더, 푸터 없는 메인페이지만 띄울때 여기선언 */}
          <Route path='/simple/tou' exact={true} component = {TermOfUse} />
          <Route path='/simple/pp' exact={true} component = {PrivacyPolicy} />

          {/* 헤더,푸터 포함된 부분 */}
          <Route component={Main} />
         </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
