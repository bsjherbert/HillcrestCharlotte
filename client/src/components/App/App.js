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
                  text: `

                  Hillcrest Baptist Church exists to love people genuinely, teach scripture faithfully and disciple believers fully in obedience to Christ our Lord.
                  
                  We are comprised of men, women and children from diverse backgrounds and experiences who share this common bond: we are imperfect individuals gathered to worship our perfect Heavenly Father. Whether Jesus Christ has been your Lord for many years or you are interested in learning more about what a relationship with Him might mean for your life, we invite you to visit and bring your honest questions and concerns.
                  
                  Hillcrest is a member of the Southern Baptist Convention, the Baptist State Convention of North Carolina, and the Metrolina Baptist Association.  In 2000, the Southern Baptist Convention published the Baptist Faith and Message which delineates the central tenets of our beliefs and supports them with scripture.  Please visit this link to explore these doctrinal statements that we affirm together as a body of believers.
                  
                  We invite you to explore our website to learn more about our church and we hope you’ll join us for one of our weekly services in the near future.  If you have questions about Hillcrest that aren’t addressed here, please feel free to contact us at churchoffice@hillcrestcharlotte.com.`
                },
                {
                  short:"what-to-expect",
                  title: "What to Expect",
                  href: "/pages/imnew/what-to-expect",
                  text:`
                  Sunday School
                  
                  Our Sunday School classes meet at 9:30am to study and discuss the Bible using a curriculum called The Gospel Project. 
                  We offer classes for Men, Women, Children and a nursery for children from birth through preschool.  
                  Middle and High School students study along with our adults to allow multiple generations to learn together.
                   All family members will be studying the same doctrine and portion of scripture each Sunday to facilitate family discussion
                   throughout the week.
                  Worship Service
                  Our Sunday morning worship is held in our sanctuary at 11am.  The main entrance faces Bellhaven Boulevard, but an additional 
                  entrance is available in the breezeway adjacent to the parking lot.  We recommend using this entrance during 
                  inclement weather.  An elevator is adjacent to this entrance for those who need it and a member of our Guest Experience 
                  Team will be happy to assist you in its operation.  
                  
                  Children aged birth through Preschool are welcome in Hillcrest Kids during the Worship Service.
                  
                  Midweek Bible Study
                  
                  We invite you to attend our Midweek Prayer & Bible Study each Wednesday Night at 6:30 pm.  After a meal and a time of 
                  prayer, we offer several classes on a rotating 12 week cycle.  Additionally, one of our pastors teaches an in depth, 
                  verse by verse exposition of Scripture for anyone not enrolled in a class or discipleship group.  Together we explore
                   ancient Biblical texts and consider the practical application of Scripture and how our lives as Christ followers are 
                   to be guided by God’s Word.  
                  
                  We offer a nursery and activities for elementary aged children each Wednesday Night.
                  
                  
                  
                  HOW SHOULD I DRESS
                  
                  When you visit Hillcrest you will see variations in attire. Some attenders will be casually dressed and others may
                   wear suits and ties. Our community of faith is comprised of multiple generations and as a result, attire choices 
                   reflect this. Dress comfortably!   
                  
                  
                  
                  WHERE DO I GO
                  
                  When you arrive, members of our Guest Experience Team will be happy to direct you to a classroom, Hillcrest Kids or 
                  the sanctuary worship center. It can be intimidating to visit a new church so we promise we'll be there to help you 
                  navigate our campus.
                  
                  
                  
                  WHERE DO I PARK
                  
                  Parking is located behind the classroom and office space buildings and to the right of the Bradshaw Center. Because 
                  space is limited, we respectfully ask those who are able to leave spaces closest to the breezeway and classrooms open 
                  for senior adult attenders and visiting guests.`
                },
                {
                  short:"connection-card",
                  title: "Connection Card",
                  href: "/connection",
                },
              ]
            },
            {
              short: "our-belief",
              title: "Our beliefs",
              id: "ourBeliefs",
              links: [
                {
                  short:"the-gospel",
                  title: "The Gospel",
                  href: "/pages/imnew/the-gospel",
                  text: `The Gospel is this. That Jesus Christ came to save sinners. He lived a perfect life.
                  He died on the cross and rose from the grave on the third day. He is alive in currently seated in the
                  right hand of God.`
                },
                {
                  short: "statement-of-faith",
                  title: "Statement of Faith",
                  href: "/pages/imnew/statement-of-faith",
                  text: `Statement of faith`
                },
                {
                  short: "constitution",
                  title: "Constitution",
                  href: "/pages/imnew/constitution",
                  text: `constitution`
                },
              ]
            },
            {
              title: "Leadership Team",
              id: "leadershipTeam",
              links: [
                {
                  short: "pastors",
                  title: "Pastors",
                  href: "/pages/imnew/pastors",
                  text: `pastors`
                },
                {
                  short: "deacons",
                  title: "Deacons",
                  href: "/pages/imnew/deacons",
                  text:``
                },
                {
                  short: "hillcrest-kids",
                  title: "Hillcrest Kids",
                  href: "/pages/imnew/hillcrest-kids",
                  text: ``
                },
              ]
            }
          ]
        },
        Serve:{
          title: "Serve",
          cat:"Serve",
          submenus: [
            {
              title: "Become member",
              id: "becomeMember",
              links: [
                {
                  short: "information",
                  title: "Information",
                  href: "/pages/imnew/information",
                  text: `info`
                },
                {
                  short: "my-hillcrest",
                  title: "My Hillcrest",
                  href: "/pages/imnew/my-hillcrest",
                  text: ``
                }
              ]
            },
            {
              title: "Join a team",
              id: "joinTeam",
              links: [
                {
                  short: "guest-experience",
                  title: "Guest Experience",
                  href: "/pages/imnew/guest-experience",
                  text:``
                },
                {
                  short:"safety",
                  title: "Safety",
                  href: "/pages/imnew/safety",
                  text:``
                },
                {
                  short: "worship",
                  title: "Worship",
                  href: "/pages/imnew/worship",
                  text:``
                },
                {
                  short: "hillcrest-Kids",
                  title: "Hillcrest Kids",
                  href: "/pages/imnew/hillcrest-kids",
                  text:``
                },
                {
                  short: "prayer",
                  title: "Prayer",
                  href: "/pages/imnew/prayer",
                  text:``
                },
                {
                  short: "care",
                  title: "Care",
                  href: "/pages/imnew/care",
                  text:``
                },
                {
                  short: "library",
                  title: "Library",
                  href: "/pages/imnew/library",
                  text:``
                },
                {
                  short: "special-events",
                  title: "Special Events",
                  href: "/pages/imnew/special-events",
                  text:``
                },

              ]
            },
          ]
        },
        Support:{
          title: "Support",
          cat: "Support",
          submenus: [
            {
              title:"Give",
              id: "give",
              links: [
                {
                  short:"give",
                  title: "Give Today",
                  href:"https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true"
                },
                {
                  title: "Sunday Worship Service",
                  href:"#"
                }
              ]
            },
            {
              title:"Community Involvement",
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
        Share:{
          title: "Share",
          cat: "Share",
          submenus: [
            {
              title: "Gather",
              id: "gather",
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
              title: "Learning Resources",
              id: "learningResources",
              links: [
                {
                  short:"service-sermons",
                  title: "Service Sermons",
                  href: "/pages/share/service-sermons",
                  text: `dfas`


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
