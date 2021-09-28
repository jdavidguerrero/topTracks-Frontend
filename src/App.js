import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import  { PrivateRoute } from './helpers/PrivateRoute';
import './App.css';

import './assets/css/bootstrap-reboot.min.css';
import './assets/css/bootstrap-grid.min.css';
//import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/select2.min.css';
import './assets/css/paymentfont.min.css';
import './assets/css/slider-radio.css';
import './assets/css/plyr.css';
import './assets/css/main.css';
import './assets/js/slider-radio.js';

// Import Containers
import LoginContainer from './container/loginContainer.jsx';
import RegisterContainer from './container/registerContainer.jsx';
import DashboardContainer from './container/dashboardContainer.jsx';

function App() {
  return (
    <div>
        <Router>
      
            <Route exact path='/' render={props => <LoginContainer {...props }/>} />
            <Route exact path='/register' render={props => <RegisterContainer {...props }/>} />
            <Route path='/dashboard' render={props => <DashboardContainer {...props }/>} />
            {/* <PrivateRoute path='/dashboard' component={DashboardContainer}/> */}
        </Router>
      </div>
  );
}

export default App;
