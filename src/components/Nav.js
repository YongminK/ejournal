import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <NavLink to='/home' className="nav-link" activeClassName="active">Главная</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to='#' className="nav-link" activeClassName="active">Выход</NavLink>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar;