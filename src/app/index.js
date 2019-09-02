import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import { NavBar } from '../components';
import { BooksList, BooksInsert, BooksUpdate } from '../pages';

function App(){
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact render={() => (<Redirect to="/books/list"/>)} />
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/books/create" exact component={BooksInsert} />
                <Route path="/books/update/:id" exact component={BooksUpdate} />
            </Switch>
        </Router>
    )
}

export default App;