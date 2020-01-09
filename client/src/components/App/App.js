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
import PageTemplate from "../../components/Pagetemplate";

import HillcrestTheme from "./theme";
import "./App.css";

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
                  href: "/pages/About-Us"
                },
                {
                  title: "What to Expect",
                  href: "/pages/What-to-Expect"
                },
                {
                  title: "Connection Card",
                  href: "/pages/Connection-Card"
                },
                {
                  title: "Contact Us",
                  href: "#"
                },
              ]
            },
            {
              title: "Our beliefs",
              id: "ourBeliefs",
              links: [
                {
                  title: "The Gospel",
                  href: "/pages/The-Gospel"
                },
                {
                  title: "Statement of Faith",
                  href: "/pages/Statement-of-Faith"
                },
                {
                  title: "Constitution",
                  href: "/pages/Constitution"
                },
              ]
            },
            {
              title: "Leadership Team",
              id: "leadershipTeam",
              links: [
                {
                  title: "Pastors",
                  href: "/pages/Pastors"
                },
                {
                  title: "Deacons",
                  href: "/pages/Deacons"
                },
                {
                  title: "Hillcrest Kids",
                  href: "/pages/Hillcrest Kids"
                },
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
                  href: "#"
                }
              ]
            },
            {
              title: "Join a Group",
              id: "joinGroup",
              links: [
                {
                  title: "Bible Study",
                  href: "#"
                },
                {
                  title: "Hillcrest Kids",
                  href: "#"
                },
                {
                  title: "Discipleship Groups",
                  href: "#"
                }
              ]
            },
            {
              title: "Life Services",
              id: "lifeServices",
              links: [
                {
                  title: "Marriage Counseling",
                  href: "#"
                }
              ]
            }

          ]
        },
        {
          title: "Learn",
          submenus: [
            {
              title:"Gather",
              id: "gather",
              links: [
                {
                  title: "Sunday School(All Ages)",
                  href:"#"
                },
                {
                  title: "Sunday Worship Service",
                  href:"#"
                }
              ]
            },
            {
              title:"Resources",
              id:"resources",
              links: [
                {
                  title:"Service Sermons",
                  href:"#"
                },
                {
                  title:"Book of the Month",
                  href:"#"
                },
                {
                  title: "365 Reading Plan",
                  href:"#"
                },
                {
                  title:"e-Library",
                  href:"#"
                }
              ]
            }
          ]
        },
        {
          title: "Serve",
          submenus: [
            {
              title: "Welcome to Hillcrest",
              id: "welcomeHillcrest",
              links: [
                {
                  title: "Connection Card",
                  href: "#"
                },
                {
                  title: "What to Expect",
                  href:"#"
                },
                {
                  title: "FAQs",
                  href:"#"
                }
              ]
            },
            {
              title: "Our Beliefs",
              id: "ourbeliefs",
              links: [
                {
                  title: "The Gospel",
                  href: "#"
                },
                {
                  title: "Statement of Faith",
                  href: "#"
                },
                {
                  title: "Constitution",
                  href: "#"
                }
              ]
            },
            {
              title: "LeaderShip Team",
              id: "leadershipTeam",
              links: [
                {
                  title: "Elders",
                  href: "#"
                },
                {
                  title:"deacons",
                  href: "#"
                }
              ]
            }

          ]
        }
      ]
    };
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
                onPageChange={this.handlePageChange} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/connection" component={ConnectionCard} />
                <Route path="/pages" render={(props) => <PageTemplate {...props} allMenus={this.state.allMenus} />} />
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
