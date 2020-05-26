import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer'
import { Container } from '@material-ui/core';

const store = createStore(
   reducer
);

function App() {
   return (
      <Container>
         <Provider store={store}>
            <Router>
               <Routes />
            </Router>
         </Provider>
      </Container>
   );
}

export default App;
