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
        fetch('http://10.242.166.120:8080/students',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTY3MDgzOTY5LCJleHAiOjE1NjcxNzAzNjl9.KoEwI_GoxxQNzQw9KGeZlurfQl43zAVTTmXyOApE6x8dK0R6nBNuJS9neec8SgBcs5OgeGw-1wUn9ut8l9yTaA'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    students: responseJson
                });
                // console.log(responseJson[1].firstName);
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
                        <ColumnStudent students = {this.state.students} groupNumber = {this.props.match.params.number}/>
                    </Col>
                    <Col>
                        <h2>Предметы</h2>
                        <ColumnSubject subjects = {this.state.subjects} groupNumber = {this.props.match.params.number}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Group;