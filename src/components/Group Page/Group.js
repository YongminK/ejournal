import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ColumnSubject from './ColumnSubject';
import ColumnStudent from './ColumnStudent';
import ModalStudent from './ModalStudent';
import ModalSubject from './ModalSubject';
import '../../styles/main.css';

class Group extends React.Component{
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            modalStudentIsShow: false,
            modalSubjectIsShow: false
        };
        this.showAddStudentModal = this.showAddStudentModal.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.showAddSubjectModal = this.showAddSubjectModal.bind(this);
    }

    componentDidMount(){ 
    }

    showAddStudentModal(){
        this.setState({modalStudentIsShow: true});
        document.getElementById('root').style.opacity = 0.3;
    }
    modalClose(){
        this.setState({
            modalStudentIsShow: false,
            modalSubjectIsShow: false
        });
        document.getElementById('root').style.opacity = 1;
    }
    showAddSubjectModal(){
        this.setState({modalSubjectIsShow: true});
        document.getElementById('root').style.opacity = 0.3;
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className='column-header'>
                            <h2>Список группы</h2>
                            <Button onClick={this.showAddStudentModal}>Добавить студента</Button>
                        </div>
                        <ColumnStudent  groupNumber = {this.props.match.params.number}/>
                    </Col>
                    <Col >
                        <div className='column-header'>
                            <h2>Предметы</h2>
                            <Button onClick={this.showAddSubjectModal}>Добавить предмет</Button>
                        </div>                        
                        <ColumnSubject  groupNumber = {this.props.match.params.number}/>
                    </Col>
                </Row>
                <ModalStudent show={this.state.modalStudentIsShow} 
                    modalClose={this.modalClose} 
                    />
                <ModalSubject show={this.state.modalSubjectIsShow} 
                modalClose={this.modalClose} 
                />

            </Container>
        );
    }
}

export default Group;