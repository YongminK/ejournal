import React from 'react';
import ColumnGroup from './ColumnGroup';
import ColumnTask from './ColumnTask';
import {Container, Row, Col} from 'react-bootstrap';

class Subject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            tasks: [],
            groups: []
        };
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/YongminK/json-server/subjects/434',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    groups: responseJson.groups,
                    tasks: responseJson.tasks
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
                        <h2>Работы</h2>
                        <ColumnTask tasks={this.state.tasks}/>
                    </Col>
                    <Col>
                        <h2>Группы</h2>
                        <ColumnGroup groups={this.state.groups}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Subject;