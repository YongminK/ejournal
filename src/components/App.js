import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import Auth from './Auth';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      auth: false
    };
  }
  render() {
    if (!this.state.auth) {
      return <Auth />
    } else {
      return (
        <Container>
          <Navbar />
          <Main />
          <Footer />
        </Container>
      )
    }

  }
}

export default App;
