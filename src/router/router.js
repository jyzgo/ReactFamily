import  React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1'

const getRouter =()=>(
    <Router>
        <div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/pag1">Page1</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component ={Home}/>
            <Route path = "/pag1" component = {Page1}/>
        </Switch>
        </div>
    </Router>
);

export default getRouter;