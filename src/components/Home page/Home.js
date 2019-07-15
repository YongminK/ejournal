import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ColumnGroup from './ColumnGroup';
import ColumnSubject from './ColumnSubject';

class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            groups: [],
            subjects: []
        }
    }
    componentDidMount(){
        document.title = "Главная";
        fetch('https://my-json-server.typicode.com/YongminK/json-server/subjects',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    subjects: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
        fetch('https://my-json-server.typicode.com/YongminK/json-server/groups',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    groups: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <h2>Предметы</h2>
                            <ColumnSubject subjects={this.state.subjects} />
                        </Col>
                        <Col>
                            <h2>Группы</h2>
                            <ColumnGroup groups={this.state.groups}/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home;