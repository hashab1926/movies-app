import { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// import imgProfile from '../../../public/img/myphoto.jpeg';
class Header extends Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="logo">
                    <i className="lni lni-stackoverflow"></i>
                    <div className="ml-2">MEDIA APP</div>
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

export default Header;