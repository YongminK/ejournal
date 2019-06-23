import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component{
  render(){
    return(
      <Container>
        <Navbar/>
        <Main/>
        <Footer/>
      </Container>
    )
  }
}

export default App;
