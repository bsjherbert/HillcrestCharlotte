import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import TopNav from "../Navigation/TopNav";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import MainNav from "../../components/Navigation/MainNav";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ConnectionCard from "../../pages/ConnectionCard/ConnectionCard";
import Dashboard from "../../pages/Dashboard/Dashboard";
import NotFound from "../../pages/NotFound/NotFound";
import Footer from '../Footer';
import PageContainer from "../../components/PageContainer";
import PageTemplate from "../../components/Pagetemplate"
// import test from '../../pages/testPage'


import HillcrestTheme from "./theme";
import "./App.css";
import { Pages } from "@material-ui/icons";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({
        auth: { ...prevState.auth, user, authToken }
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined }
      }));
    };

    this.handleMenu = () => {
      this.setState(state => ({
        isOpen: !state.isOpen
      }))
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      },
      menu: {
        isOpen: false
      },
      sideNav: {},
      allMenus: [
        {
            title: "I'm New",
            submenus: [
                {
                     title: "Welcome to Hillcrest",
                     id: "welcomeHillcrest",
                     links: [
                         {
                             title: "About Us",
                             href:"#"
                         },
                         {
                             title: "What to Expect",
                             href:"#"
                         }
                     ]
                },
                {
                 title: "Our beliefs",
                 id: "ourBeliefs",
                 links: [
                     {
                         title: "The Gospel",
                         href:"#"
                     },
                     {
                         title: "Statement",
                         href:"#"
                     }
                 ]
            }
            ]
        },
        {
            title: "Connect",
            submenus: [
                {
                     title: "Become member",
                     id: "becomeMember",
                     links: [
                         {
                             title: "Information",
                             href:"#"
                         }
                     ]
                },
                {
                 title: "Join a Group",
                 id: "joinGroup",
                 links: [
                     {
                         title: "Bible Study",
                         href:"#"
                     },
                     {
                         title: "Hillcrest Kids",
                         href:"#"
                     },
                     {
                         title: "Discipleship Groups",
                         href:"#"
                     }
                 ]
            }
            ]
        },
       ]
    };
  }

 handlePageChange = (page) => {
  this.setState({sideNav: this.state.allMenus[page]})
}

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user =>
        this.setState(prevState => ({ auth: { ...prevState.auth, user } }))
      )
      .catch(err => console.log(err));
  }

  

  render() {
    return (
      <MuiThemeProvider theme={HillcrestTheme}>
        <AuthContext.Provider value={this.state.auth}>
          <div className="App">
            <TopNav />
            <PageContainer>
              <MainNav isOpen={this.state.isOpen}
              onPageChange = {this.handlePageChange} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/connection" component={ConnectionCard} />
                {/* <Route path="/pages" component={PageTemplate} /> */}
                <Route path="/pages" render={(props) => <PageTemplate {...props} pagechange={this.handlePageChange} />} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </PageContainer>
            <Footer />
          </div>
        </AuthContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
