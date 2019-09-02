import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class ModalStudent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление студента</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="secondName">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="text" placeholder="Иванов" />
                        </Form.Group>
                        <Form.Group controlId="firstName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Иван" />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control type="text" placeholder="Иванович" />
                        </Form.Group>
                        <Form.Group controlId="groupNumber">
                            <Form.Label>Группа</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group> 
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.modalClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={this.props.modalClose}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}