import { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { eventBindings } from '../../Helpers/Events';
import ControllerHeader from './ControllerHeader';
import { connect } from 'react-redux';
import { showNavbar, hideNavbar } from '../../Redux/Actions';
// import imgProfile from '../../../public/img/myphoto.jpeg';
class Header extends Component {

    constructor() {
        super();
        this.state = {
            caretToggle: true,
        }
        eventBindings(this, ['clickCaretFeature', 'clickNavbar'])
    }
    render() {
        return (
            <header className="header-wrapper">
                <div className="logo">
                    <div className="hamburger-menu" onClick={this.clickNavbar}><i className="lni lni-menu"></i></div>

                    <i className="lni lni-stackoverflow"></i>

                    <div className="ml-2">MEDIA APP</div>
                    <div className="caret-feature" onClick={this.clickCaretFeature}><i className="lni lni-chevron-down"></i></div>
                </div>
                <div className="feature">
                    <div className="form-search">
                        <i className="lni lni-search-alt font-md fweight-600"></i>
                        <input type="text" name="search" placeholder="Search movies" className="forminput-header" />
                    </div>
                    <div className="right-feature">
                        <div className="account-user">
                            <img src='/img/myphoto.jpeg' width="35" />

                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

Object.assign(Header.prototype, ControllerHeader);

const mapStateToProps = (state, ownProps) => {
    return {
        navbar: state.navbar
    }
}

export default connect(mapStateToProps, { showNavbar, hideNavbar })(Header);