import { Header } from './components/Header';
import { Footer } from './components/Footer';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  margin: 0px auto;
`;

function App() {
  return (
    <Container>
      <Header></Header>
      <Footer></Footer>
    </Container>
  );
}

export default App;