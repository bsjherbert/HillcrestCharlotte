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
      allMenus: {
        imnew:{
          title: "I'm New",
          cat: "ImNew",
          submenus: [
            {
              title: "Welcome to Hillcrest",
              id: "welcomeHillcrest",
              links: [
                {
                  short:"about-us",
                  title: "About Us",
                  href: "/pages/imnew/about-us",
                  content: `

                  Hillcrest Baptist Church exists to love people genuinely, teach scripture faithfully and disciple believers fully in obedience to Christ our Lord.
                  
                  We are comprised of men, women and children from diverse backgrounds and experiences who share this common bond: we are imperfect individuals gathered to worship our perfect Heavenly Father. Whether Jesus Christ has been your Lord for many years or you are interested in learning more about what a relationship with Him might mean for your life, we invite you to visit and bring your honest questions and concerns.
                  
                  Hillcrest is a member of the Southern Baptist Convention, the Baptist State Convention of North Carolina, and the Metrolina Baptist Association.  In 2000, the Southern Baptist Convention published the Baptist Faith and Message which delineates the central tenets of our beliefs and supports them with scripture.  Please visit this link to explore these doctrinal statements that we affirm together as a body of believers.
                  
                  We invite you to explore our website to learn more about our church and we hope you’ll join us for one of our weekly services in the near future.  If you have questions about Hillcrest that aren’t addressed here, please feel free to contact us at churchoffice@hillcrestcharlotte.com.`
                },
                {
                  short:"what-to-expect",
                  title: "What to Expect",
                  href: "/pages/imnew/what-to-expect",
                  content: `what to expect`
                },
                {
                  short:"connection-card",
                  title: "Connection Card",
                  href: "/connection",
                  content: "connection card fam"
                },
                {
                  title: "Contact Us",
                  href: "/pages/imnew/contact-us",
                  content:"Contact us"

                  
                },
              ]
            },
            {
              title: "Our beliefs",
              id: "ourBeliefs",
              links: [
                {
                  title: "The Gospel",
                  href: "/pages/the-gospel"
                },
                {
                  title: "Statement of Faith",
                  href: "/pages/statement-of-faith"
                },
                {
                  title: "Constitution",
                  href: "/pages/constitution"
                },
              ]
            },
            {
              title: "Leadership Team",
              id: "leadershipTeam",
              links: [
                {
                  title: "Pastors",
                  href: "/pages/pastors"
                },
                {
                  title: "Deacons",
                  href: "/pages/deacons"
                },
                {
                  title: "Hillcrest Kids",
                  href: "/pages/hillcrest kids"
                },
              ]
            }
          ]
        },
        connect:{
          title: "Connect",
          cat:"Connect",
          submenus: [
            {
              title: "Become member",
              id: "becomeMember",
              links: [
                {
                  title: "Information",
                  href: "/pages/information"
                }
              ]
            },
            {
              title: "Join a Group",
              id: "joinGroup",
              links: [
                {
                  title: "Bible Study",
                  href: "/pages/bible-study"
                },
                {
                  title: "Hillcrest Kids",
                  href: "/pages/hillcrest-kids"
                },
                {
                  title: "Discipleship Groups",
                  href: "/pages/discipleship-groups"
                }
              ]
            },
            {
              title: "Life Services",
              id: "lifeServices",
              links: [
                {
                  title: "Marriage Counseling",
                  href: "/pages/marriage-counseling"
                }
              ]
            }

          ]
        },
        learn:{
          title: "Learn",
          cat: "Learn",
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
        serve:{
          title: "Serve",
          cat: "Serve",
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
      }
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
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route path="/pages" render={(props) => <PageTemplate {...props} allMenus={this.state.allMenus} />} />
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
