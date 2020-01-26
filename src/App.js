import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './pages/Header';

function App() {
  return (
    //사용자 작성 코드
    <div className="App">
      <Header/>
      {/* <MainTemplate>
        템플릿 완성
      </MainTemplate> */}
      {this.props.children}
    </div>
    //기본코드
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
