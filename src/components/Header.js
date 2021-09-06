
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'header' };
    }
    render() {
        console.log('header present');
        return (
            <div>

                <ul>
                    <Link className="link" to="/Home">
                        <li id="Home"><h1>React Student Dashboard</h1></li>
                    </Link>
                </ul>
            </div>
        )
    }
};

export default Header;