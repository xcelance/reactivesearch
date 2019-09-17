import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './app/Home';


class App extends React.Component {
    render() {
        return (
            <Router>
	    		<div>
			    	<Switch>
				    	<Route exact path="/" component={ Home } />
				    </Switch>
			    </div>
			</Router>
        );
    }
}

export default App;
