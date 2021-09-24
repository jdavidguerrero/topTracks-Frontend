import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter, Link, Switch} from 'react-router-dom';
import logo  from './../assets/img/toptracks_logo.png'
import RouteWithSubRoutes from '../routes/routewithSubRoutes';

import Navbar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/sidebar';
import Footer from '../components/dashboard/footer';
import Cart from '../components/dashboard/cart';
import Profile from '../components/dashboard/profile';

class DashboardContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { path } = this.props.match;
        return(
			<>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Switch>
                <Route exact path={`${path}`}  render={props => <Cart {...props }/>} />
                <Route exact path={`${path}/profile`}  render={props => <Profile {...props }/>} />
            </Switch>
            <Footer></Footer>
        </>
        );
    }
}

export default withRouter(DashboardContainer);