import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class ModalSubject extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить предмет</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>                        
                    <Form.Group controlId="subjects">
                        <Form.Label>Список предметов</Form.Label>
                        <p className="text-muted" style={{fontSize: 10+'px'}}>Можно выбрать только уже из добавленных в БД предметов</p>
                        <Form.Control as="select" multiple>
                            <option>Базы данных</option>
                            <option>ИКГ</option>
                            <option>Информатика</option>
                        </Form.Control>
                    </Form.Group>
                    </Form></Modal.Body>
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