import React from 'react';
import {Link} from 'react-router-dom';
import {Load} from '../../styles/Spinner-1.1s-200px.svg';
let names = [];
class ColumnStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            names: []
        };
        this.loop = this.loop.bind(this);
        this.timeout = this.timeout.bind(this);
    }
    loop() {

        for(var i=0; i < this.props.students.length; i++){
           if(this.props.groupNumber === this.props.students[i].group.number){
                names[i] = {
                    'firstName': this.props.students[i].firstName,
                    'lastName':this.props.students[i].lastName,
                    'secondName':this.props.students[i].secondName
                };                
           }            
        }
        this.setState = {
            names: names
        }
    }

    timeout(){
        setTimeout(this.loop, 500);
    }
    componentWillMount(){
        this.timeout();
    }
    render(){ 
        // if(names.length === 0){
        //     return <Load />;
            
        // }       
        return(

            <ul>            
                {this.names.forEach((item) =>
                    <li>
                        {item.secondName +' '+ item.firstName +' '+ item.lastName}
                    </li> 
                )}             
            </ul>

      
 
           
        );
                
    }
}
export default ColumnStudent;