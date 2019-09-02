import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ColumnSubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           loading: true,
           subjects: []
        };
    }
    componentDidMount(){
        // axios.get('http://10.242.166.120:8080/students' ,
        // {
        //     headers:{
        //         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTY3Mjc0Mjk2LCJleHAiOjE1NjczNjA2OTZ9.uzu-fKpsShz9N_OY9A6nPaqhQ4euf0uQzk3w7LUrQEjCaqY0nA-UB9FOua7YAMKWlAC2WcAP_iNU8oczIVjcxQ'
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //         this.setState({subjects:res.data});
        //     })
    }
    render(){
        // let subj = [];       
        // for(let i = 0; this.state.subjects.length > i; i++) {            
        //     if(this.state.subjects[i].group.number === this.props.groupNumber){
        //         subj[i] = this.state.subjects[i];               
        //     }
        // }
        return(
            <ul className='main-list'>
                {/* {subj.map((subject,index) => 
                <Link className="list-group-item
                    list-group-item-action 
                    d-flex 
                    justify-content-between
                    align-items-center"
                    to={"/student/"+subject.lastName}
                    key={index} >>
                    {subject.lastName} {subject.firstName} {subject.secondName}
                    <span className="badge badge-primary badge-pill"><i className="far fa-edit" ></i>
                    <i className="far fa-trash-alt"></i></span>  
                </Link>)} */}
                <li>Тут предметы всякие</li>
            </ul>
        )
    }
} 

export default ColumnSubject;