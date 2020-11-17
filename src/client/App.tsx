import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Details from './views/Details';
import Admin from './views/Admin';
import Create from './views/Create';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/:id"> 
                        <Details />
                    </Route>
                    <Route exact path="/admin/:id">
                        <Admin />
                    </Route>
                    <Route exact path="/create">
                        <Create />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;