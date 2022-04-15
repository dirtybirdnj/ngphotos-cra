import styled from 'styled-components';

// Layout 
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './views/Home';
import { Gallery } from './views/Gallery';


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
      <Home />
      {/*<Gallery />*/}
      
      <Footer></Footer>
    </Container>
  );
}

export default App;