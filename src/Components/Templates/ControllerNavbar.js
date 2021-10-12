const ControllerNavbar = {

    clickCloseNavbar() {
        const navbarWrapper = document.querySelector('.navbar-wrapper');
        navbarWrapper.classList.remove('show');
        this.props.hideNavbar();
    },

    detectNavbar() {
        const styleNavbar = document.querySelector('.navbar-wrapper');
        const computedNavbar = getComputedStyle(styleNavbar);
        if (computedNavbar.left != '0px')
            this.props.hideNavbar()
        else
            this.props.showNavbar()
    }
}

export default ControllerNavbar;