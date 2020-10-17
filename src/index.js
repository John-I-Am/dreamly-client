import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import TrendsPage from './pages/TrendsPage'
import ProfilePage from './pages/ProfilePage'

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/profile' render={() => window.localStorage.getItem('loggedUser') === null  ? <Redirect to="/login" /> : <ProfilePage/>}/>
          <Route path='/trends' render={() => window.localStorage.getItem('loggedUser') === null  ? <Redirect to="/login" /> : <TrendsPage/>}/>
          <Route path='/dashboard' render={() => window.localStorage.getItem('loggedUser') === null  ? <Redirect to="/login" /> : <DashboardPage/>}/>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>     
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

