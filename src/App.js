import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Sidebar from './components/SIdebar';

import { GlobalStyle } from './Global';
import { Container, Glob, Content } from './Global/styles';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Glob>
          <Container>
            <Header />
            <Content>
              <Sidebar />
              <Routes />
            </Content>
          </Container>
        </Glob>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
