import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { useState , useEffect, useMemo } from 'react';
import 'normalize.css';
import Navbar from './views/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Home from './views/Home';
import { BrowserRouter as Router, Route , Routes, Switch,Link } from 'react-router-dom';
import YT from './Pages/YT/YT';
import Chat from './Pages/Chat/Chat';
const Container = styled.div`
  // background-color:${({theme})=>theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;


const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
}




function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/Judy-Only/" exact={true} element={<Home/>} />
          <Route path="/Chat" exact={true} element={<Chat/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
