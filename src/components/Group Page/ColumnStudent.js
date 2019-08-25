import React from 'react';
import {Link} from 'react-router-dom';

class ColumnStudent extends React.Component{
    render(){
        return(
            <>
            {this.props.students.map((item, index) =>
                <Link 
                    className="list-group-item
                    list-group-item-action 
                    d-flex 
                    justify-content-between
                    align-items-center"
                    to={"/student/"+item.id}
                    key={index} >
                    {item.secondName} {item.firstName} {item.lastName}
                    <span className="badge badge-primary badge-pill"><i className="far fa-edit" ></i>
                    <i className="far fa-trash-alt"></i></span>  
                </Link> 
            )} 
            {console.log(this.props.students)}
            </>
        );
    }
}
export default ColumnStudent;