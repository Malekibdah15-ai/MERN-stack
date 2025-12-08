import React from 'react';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navgation';
import Main from './component/main';
import SubContents from './component/supcontent';
import Advertisement from './component/advirtisment';
import  './css/style.modules.css';
                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}

export default App
