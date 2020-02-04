import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/configure";
import Main from 'pages/Main';
function App() {
  return (
    //사용자 작성 코드
    <Provider store={store}>
    <div className="App">
      <Main/>
    </div>
    </Provider>
  );
}

export default App;
