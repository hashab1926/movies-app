import { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

class Sidebar extends Component {
    render() {
        return (
            <nav className="navbar-wrapper">
                <ul>
                    <li className="active"><Link to="/"> New Releases</Link></li>
                    <li><Link to="/trending"> Trending</Link></li>
                    <li><Link to="/trending"> Comming Soon</Link></li>
                    <li><Link to="/trending"> Favourites</Link></li>
                    <li><Link to="/trending"> Watch Later</Link></li>
                    <li><Link to="/trending"> Genres</Link></li>

                </ul>
            </nav>
        );
    }

    componentDidMount() {
        const activeItem = document.querySelector('.navbar-wrapper li.active');
        const icon = document.createElement("li");
        icon.className = "lni lni-arrow-right";
        icon.style = "font-size:1.8rem; font-weight:600; color:#777";
        activeItem.appendChild(icon);
    }

}

export default Sidebar;