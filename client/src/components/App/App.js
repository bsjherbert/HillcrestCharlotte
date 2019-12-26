import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import TopNav from '../Navigation/TopNav';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import HillcrestTheme from './theme';

import './App.css';
import PageContainer from '../PageContainer';
import Footer from '../Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ThemeProvider theme={HillcrestTheme}>
          <AuthContext.Provider value={this.state.auth}>
            <div className='App'>
              <TopNav />
              <PageContainer />
              <Footer />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <PrivateRoute path='/secret' component={Secret} />
                  <Route component={NotFound} />
                </Switch>
            </div>
          </AuthContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
