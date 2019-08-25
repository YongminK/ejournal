import React from 'react';
import Home from './Home page/Home';
import Subject from './Subject page/Subject';
import Group from './Group Page/Group';
import Auth from './Auth';
import NotePage from './Note Page/NotePage';
import { Switch, Route } from 'react-router-dom';
class Main extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path='/subject/:name' component={Subject} />
                    <Route path='/group/:number' component={Group} />
                    <Route path='/auth' component={Auth} />
                    <Route path='/note/:group' component={NotePage}/>
                </Switch>
            </div>
        )
    }
}

export default Main;