import React, {useEffect} from 'react'
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Container} from "./components/Container";
import {MainPage} from "./pages/MainPage";

export const App = () => {

    return (
      <div className={'wrapper'}>
        <Header />
          <Main>
              <Container>
                 <MainPage />
              </Container>
          </Main>
      </div>
    )
}