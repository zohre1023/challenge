import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/total.scss';

// const wrapper = document.getElementById("root");
// wrapper && ReactDOM.render(React.createElement(Container, null), wrapper);

ReactDOM.render(
  <BrowserRouter>
    <Container />
  </BrowserRouter>
  , document.getElementById('root'));
