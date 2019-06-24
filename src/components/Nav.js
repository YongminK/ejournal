import React from 'react';
import { Nav } from 'react-bootstrap';

class Navbar extends React.Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="#">Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Выход</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar;