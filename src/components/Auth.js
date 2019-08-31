import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


class Auth extends React.Component {
    constructor(props){
        super();
        this.state = {
            isAuth: false
        };
        this.auth = this.auth.bind(this);
    }
    auth(){
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let data = {
            username:login,
            password:password
        };
        fetch('http://10.242.166.120:8080/auth',{
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                this.setState({
                    isAuth: true                    
                });
                response.headers.forEach((val,key) => {
                    console.log(val,key);
                });
               
            })
            .catch((error) => {
                console.error(error);
            });

    }
    render() {
        return (
            <Container   style={{height: 95 + 'vh'}}>
                <Row className="row h-100 justify-content-center align-items-center">
                    <Col lg='4'>
                        <Form>
                            <Form.Group controlId="login">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control type="text" placeholder='Логин' />
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type='password' placeholder='Пароль' />
                            </Form.Group>
                            <Button variant="primary" onClick={this.auth}>
                                Войти
                            </Button>
                        </Form>
                    </Col>                    
                </Row>
            </Container>
        )
    }
}

export default Auth;