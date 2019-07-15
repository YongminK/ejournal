import React from 'react';
import {Link} from 'react-router-dom';

class ColumnGroup extends React.Component{
    render(){
        return(
            <>
            {this.props.groups.map((item, index) =>
                <Link 
                    className="list-group-item
                    list-group-item-action 
                    d-flex 
                    justify-content-between
                    align-items-center"
                    to={"/group/"+item.groupNumber}
                    key={index} >
                    {item.groupNumber}
                    <span className="badge badge-primary badge-pill"><i className="far fa-edit" ></i>
                    <i className="far fa-trash-alt"></i></span>  
                </Link> 
            )}         
            </>
        );
    }
}
export default ColumnGroup;