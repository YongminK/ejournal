import React from 'react';


class ColumnTask extends React.Component{
    render(){
        return(
            <ul style={{padding:0}}>
            {this.props.tasks.map((item, index) =>
                <li 
                    className="list-group-item
                    list-group-item-action 
                    d-flex 
                    justify-content-between
                    align-items-center"                    
                    key={index} >
                    {item.taskName}
                    <span className="badge badge-primary badge-pill"><i className="far fa-edit" ></i>
                    <i className="far fa-trash-alt"></i></span>  
                </li> 
            )}         
            </ul>
        );
    }
}

export default ColumnTask;