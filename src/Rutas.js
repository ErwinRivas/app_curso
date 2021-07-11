import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import PageNueva from './pages/PageNueva'
import NotFound from './componentes/NotFound'
import { createBrowserHistory } from 'history'

class Rutas extends Component {
    render() {
        const History = createBrowserHistory();
        return (
            <Router history ={History}>
                <Switch>
                    <Route exact path="/app_curso" component={App} />
                    <Route exact path="/app_curso/paginanueva" component={PageNueva} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Rutas