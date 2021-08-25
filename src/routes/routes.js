import cart from "../../components/dashboard/cart";
import profile from "../../components/dashboard/profile";
import dashboardContainer from "../../container/dashboardContainer";
import loginContainer from "../../container/loginContainer";
import registerContainer from "../../container/registerContainer";




const routes = [
    {
    path: '/dashboard',
    component: dashboardContainer,
    // added nested routes
    routes: [              
        {
        // Also note how we added /home before the 
        // actual page name just to create a complete path
        path: '/dashboard/',
        component: cart,
        },
        {
        path: '/dashboard/profile',
        component: profile,
        },
    ],
    },
];

export default routes;