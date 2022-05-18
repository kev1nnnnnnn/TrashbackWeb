import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavPage from './NavPage';
import MainPage from './MainPage';
import FooterPage from './FooterPage';

function App() {
  return (
    <div className="App">
     <NavPage />
     <MainPage />
     <FooterPage />
    </div>
  );
}

export default App;
