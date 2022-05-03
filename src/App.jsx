import { Container, Footer, MainTitle } from './styled-components';
import SearchCountry from './components/SearchCountry';

function App() {
  return (
    <>
      <Container>
        <MainTitle
          initial={{
            translateY: -2000,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
        >
          Country Search

        </MainTitle>

        <SearchCountry />
      </Container>

      <Footer>
        <p>
          Diseñado con ♥ por Anthony Rosman para ©Kimche
          {' '}
          {new Date().getFullYear()}
        </p>
      </Footer>
    </>

  );
}

export default App;
