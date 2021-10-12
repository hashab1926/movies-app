const ControllerHeader = {
    clickCaretFeature() {
        let icon = `<i class="lni lni-chevron-down"></i>`; // default up
        if (this.state.caretToggle) {
            this.setState({ caretToggle: false });
            icon = `<i class="lni lni-chevron-up"></i>`;
            document.querySelector('.header-wrapper > .feature').classList.add('hide')
            document.querySelector('.header-wrapper').style = "height:5rem";

        } else {
            this.setState({ caretToggle: true });
            document.querySelector('.header-wrapper > .feature').classList.remove('hide')
            document.querySelector('.header-wrapper').style = "height:10rem";

        }

        document.querySelector('.caret-feature').innerHTML = icon;
    },

    clickNavbar(evt) {
        const navbarWrapper = document.querySelector('.navbar-wrapper');
        if (this.props.navbar) {
            navbarWrapper.classList.remove('show')
            this.props.hideNavbar();
        }
        else {
            navbarWrapper.classList.add('show')
            this.props.showNavbar();

        }

    }
}

export default ControllerHeader;