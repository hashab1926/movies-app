import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Dashboard from '../Pages/Dashboard/';
import Header from '../Components/Templates/Header';
import Sidebar from '../Components/Templates/Sidebar';

const ProtectedRoutes = (props) => {
    document.body.className = "bg-grey";
    const { component, path } = props;
    return (
        <>
            <Route path={path} component={component} {...props} />
        </>
    );

}

const Routes = () => {
    return (
        <Router>
            <Header />
            <Sidebar />
            <br /><br />
            <section id="wrapper-content">
                <Switch>
                    <Route exact path='/' component={Dashboard} />

                </Switch>
            </section>
        </Router>
    );
}

export default Routes;