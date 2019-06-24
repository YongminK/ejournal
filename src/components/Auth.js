import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class Auth extends React.Component {
    render() {
        return (
            <Container   style={{height: 100 + 'vh'}}>
                <Row className="row h-100 justify-content-center align-items-center">
                    <Col lg='4'>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Электронная почта</Form.Label>
                                <Form.Control type="email" placeholder='example@example.com' />
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type='password' placeholder='Пароль' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
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