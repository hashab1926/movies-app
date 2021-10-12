import { Component } from 'react';
import { Link } from 'react-router-dom';
import { eventBindings } from '../../Helpers/Events';
import ControllerNavbar from './ControllerNavbar';
import { hideNavbar, showNavbar } from '../../Redux/Actions';
import { connect } from 'react-redux';
import './navbar.scss';

class Navbar extends Component {
    constructor() {
        super();
        eventBindings(this, ['clickCloseNavbar', 'detectNavbar'])
    }

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

                <div className="close-navbar" onClick={this.clickCloseNavbar}><i className="lni lni-close"></i></div>
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

const mapStateToProps = state => {
    return {
        navbar: state.navbar
    }
}
Object.assign(Navbar.prototype, ControllerNavbar);
export default connect(mapStateToProps, { hideNavbar, showNavbar })(Navbar);