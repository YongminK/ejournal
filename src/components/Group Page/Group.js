import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ColumnSubject from './ColumnSubject';
import ColumnStudent from './ColumnStudent';

class Group extends React.Component{
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            students: [],
            subjects: []
        };
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/YongminK/json-server/groups/0',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    students: responseJson.students
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2>Список группы</h2>
                        <ColumnStudent students = {this.state.students}/>
                    </Col>
                    <Col>
                        <h2>Предметы</h2>
                        <ColumnSubject subjects = {this.state.subjects}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Group;