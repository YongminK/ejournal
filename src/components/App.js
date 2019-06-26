import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import Auth from './Auth';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';
import { bindActionCreators } from 'redux';



class App extends React.Component {
  
  render() {
    const { type } = this.props.auth;
    const { setLog } = loginAction;
    if(type === 'LOGOUT'){
      return (
      <>
        <Auth setLog={setLog} />
      </>);
    } else if(type === 'LOGIN'){
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

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginAction: bindActionCreators(loginAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

