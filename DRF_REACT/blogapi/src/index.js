import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker  from './serviceWorker.js';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

const routing = (
     <Router>
          <React.StrictMode>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
                <Footer />
          </React.StrictMode>
     </Router>                

);

ReactDOM.render(routing, document.getElementById( 'root' ));

//If you want your app to work offline and load faster,you can change
//unregiter() to register() below.note this comes with some pitfalls.
//learn more about service workers: https: //bit.ly/CRA-PWA
serviceWorker.unregister();