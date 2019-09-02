import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTY3NDIyNjEwLCJleHAiOjE1Njc1MDkwMTB9.ixeL_EQa_a2ljSVs0_vKEfj5heg5TxPC54WTnMB-qn42RuFdEJVvizYl0iX-qq4hrmG5XeSu-u4T6YBESwlLVg';

class ColumnStudent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           loading: true,
           students: []
        };
    }
    componentDidMount(){
        axios.get('http://10.242.166.120:8080/students' ,
        {
            headers:{
                Authorization: TOKEN
            }
        })
            .then(res => {
                console.log(res);
                this.setState({students:res.data});
            })
    }
    render(){
        let name = [];       
        for(let i = 0; this.state.students.length > i; i++) {            
            if(this.state.students[i].group.number === this.props.groupNumber){
                name[i] = this.state.students[i];               
            }
        }
        return(
            <ul className='main-list'>
                {name.map((person,index) => 
                <Link className="list-group-item
                    list-group-item-action 
                    d-flex 
                    justify-content-between
                    align-items-center"
                    to={"/student/"+person.lastName+person.firstName+person.secondName}
                    key={index} >
                    {person.lastName} {person.firstName} {person.secondName}
                    <span className="badge badge-primary badge-pill"><i className="far fa-edit" ></i>
                     <i className="far fa-trash-alt"></i></span>  
                </Link>)}
            </ul>
        )
    }
} 

export default ColumnStudent;