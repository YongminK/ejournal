import React from 'react';
import { Container, Table } from 'react-bootstrap';

const NOTES = [
    {
        lr1: 5,
        lr2: 2,
        id: 1
    },
    {
        lr1: 3,
        lr2: 5,
        id: 2
    }
];
const STUDENTS = [
    {
        firstName: 'aaaa',
        lastName: '1knfs',
        secondName: 'dsdsds',
        id:1
    },
    {
        firstName: 'aaaa',
        lastName: '1knfs',
        secondName: 'dsdsds',
        id: 2
    }

];
class NotePage extends React.Component{
    constructor(props) {
        super();
        this.state = {
            students: STUDENTS,
            notes: NOTES
        };
    }
    componentDidMount(){
        // fetch(' ',{
        //     method: 'GET'
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({
        //             isLoading: false,
        //             students: responseJson
        //         });
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    render(){
        return(
            <Container>
                <Table>
                    <tr>
                        <td>ФИО</td>
                        <td>Лр1</td>
                        <td>Лр2</td>
                    </tr>
                    {this.state.students.map((stud, index) =>
                        <tr>
                            <td>{stud.secondName} {stud.firstName} {stud.lastName}</td>
                            {this.state.notes.map(
                                (note, index) => 
                                
                                    <>
                                        <td>{note.lr1}</td>
                                        <td>{note.lr2}</td>
                                    </>
                                

                                    
                                                                
                            )}
                        </tr>
                    )} 
                </Table>
            </Container>
        )
    }
}

export default NotePage;