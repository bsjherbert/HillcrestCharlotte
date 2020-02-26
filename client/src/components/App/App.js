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
import Footer from "../Footer";
// import PageContainer from "../../components/PageContainer";
import PageTemplate from "../../components/Pagetemplate";
import SermonTable from "../../components/SermonTable";

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
      }));
    };

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
        imnew: {
          title: "I'm New",
          cat: "ImNew",
          submenus: [
            {
              title: "Welcome to Hillcrest",
              id: "welcomeHillcrest",
              links: [
                {
                  short: "about-us",
                  title: "About Us",
                  href: "/pages/imnew/about-us",
                  text: `

                  Hillcrest Baptist Church exists to love people genuinely, teach scripture faithfully and disciple believers fully in obedience to Christ our Lord.
                  
                  We are comprised of men, women and children from diverse backgrounds and experiences who share this common bond: we are imperfect individuals gathered to worship our perfect Heavenly Father. Whether Jesus Christ has been your Lord for many years or you are interested in learning more about what a relationship with Him might mean for your life, we invite you to visit and bring your honest questions and concerns.
                  
                  Hillcrest is a member of the Southern Baptist Convention, the Baptist State Convention of North Carolina, and the Metrolina Baptist Association.  In 2000, the Southern Baptist Convention published the Baptist Faith and Message which delineates the central tenets of our beliefs and supports them with scripture.  Please visit this link to explore these doctrinal statements that we affirm together as a body of believers.
                  
                  We invite you to explore our website to learn more about our church and we hope you’ll join us for one of our weekly services in the near future.  If you have questions about Hillcrest that aren’t addressed here, please feel free to contact us at churchoffice@hillcrestcharlotte.com.`
                },
                {
                  short: "what-to-expect",
                  title: "What to Expect",
                  href: "/pages/imnew/what-to-expect",
                  text: `
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
                  short: "connection-card",
                  title: "Connection Card",
                  href: "/connection"
                }
              ]
            },
            {
              short: "our-belief",
              title: "Our beliefs",
              id: "ourBeliefs",
              links: [
                {
                  short: "the-gospel",
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
                  text: `
                  You have confessed Jesus Christ as Lord of your life and have been baptized by immersion after 
                  salvation, but are not currently a member of another church.`
                },
                {
                  short: "constitution",
                  title: "Constitution",
                  href: "/pages/imnew/constitution",
                  text: `Brad said not to put "I couldnt find a constitution." so Ima just leave it here.`
                }
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
                  text: `Pastor: Steven Gompers,
                  Associate Pastor: my man man BRAAD HILLCREST!`
                },
                {
                  short: "deacons",
                  title: "Deacons Board",
                  href: "/pages/imnew/deacons",
                  text: `Michael Costa, Stan Foster, ​Doug McClure, Joe Penner, Don Smith, Dave Vanek,`
                },
                {
                  short: "hillcrest-kids",
                  title: "Hillcrest Kids",
                  href: "/pages/imnew/hillcrest-kids",
                  text: `HELLO PARENTS & CAREGIVERS!

                  We consider it quite a privilege to serve your little one in Hillcrest Kids while you attend Sunday School or 
                  one of our Worship Services!  Our goal is to provide a safe and exciting experience for your child and peace of 
                  mind for you while your child is in our care.
                  
                  ​As a church, we believe that one of the most important things we can do is equip parents with a Biblical understanding 
                  of their role as the primary disciplers of their children and to help them understand what that looks like practically.
                  Throughout its pages, the Bible speaks about the important task parents have in training their children to know the 
                  Lord and understand His Word. As a children’s ministry, we want to teach parents what the Bible says about parenting, 
                  how it applies to them, and how to disciple their children at home.
                  
                  We would love the opportunity to come alongside you as you strive to raise children who not only know about Jesus, 
                  but who enter into a thriving relationship with Him as their Savior. 
                   
                  
                  OUR STRUCTURE
                  
                  Hillcrest Kids offers age appropriate care and classes for children ages six weeks through preschool weekly during
                   Sunday School and our Midweek service. If you have a preschool or elementary aged child, we offer an excellent 
                   Sunday School curriculum that will expose them to essential doctrines of the faith and show them how the whole 
                   Bible is about the greatest rescue story ever told. Our midweek curriculum takes students through an exploration 
                   of the New City Catechism which seeks to ground them with Biblical truth and an understanding of Christian doctrine.
                   
                  Our older preschoolers (ages 5 and up) and elementary students join their family in our Worship Hour. We believe that
                   this is a biblical model that is beneficial for both children and adults as we worship together as the family of God.
                    We provide special worship guides for children to help them follow along with the service, and we recommend THIS 
                    article that explains some of the benefits of worshipping this way and offers some ideas for helping children
                     prepare for the worship hour.
                  
                  
                  We know that some parents will be more comfortable bringing their nursery aged children with them to our Worship 
                  Hour.  We welcome these families but do offer a Family Viewing Room if you need to step out during the service.
                  This room is located below the sanctuary and is outfitted with a television and live stream of the service.
                  
                  
                  
                  KEEPING EVERYONE SAFE
                  
                  We recognize that the safety of children is typically one of a parent’s primary concerns when introducing the child
                   to a new environment.  Here are a few ways we work to ensure the safety of our children and volunteers:
                  
                  * Trained and Background Checked Volunteers
                  
                  * Security System
                  
                  * Food / Allergy Policy
                  
                  * Wellness Guidelines
                  
                  * Safety Team Volunteers
                  
                  * Diapering / Bathroom Guidelines
                  
                  * Strict Volunteer-to-Child Ratios
                  
                  * Emergency Procedure Plan
                  
                  
                  
                  CHECKING IN
                  
                  If you have a birth—Pre K aged child, you will be asked to fill out an information form with a few details that 
                  will help us serve your child well while in our care.  Our Team Leader will give your child a name tag with a 
                  security code and you will be issued a matching parent security tag.  Your child will not be released to anyone 
                  who does not have this tag.  Additionally, if we need to reach you during the service, the security code will 
                  flash on the monitor in the sanctuary. 
                  
                  If you join us again for another service, you will be able to use our automated check-in system.  You will 
                  enter the telephone number you provided on the information form onto the tablet at our check in kiosk.  You can 
                  then select your child’s name and the security tags will automatically print.`
                }
              ]
            }
          ]
        },
        serve: {
          title: "Serve",
          cat: "serve",
          submenus: [
            {
              title: "Become member",
              id: "becomeMember",
              links: [
                {
                  short: "information",
                  title: "Information",
                  href: "/pages/serve/information",
                  text: `info`
                },
                {
                  short: "my-hillcrest",
                  title: "My Hillcrest",
                  href: "/pages/serve/my-hillcrest",
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
                  href: "/pages/serve/guest-experience",
                  text: ``
                },
                {
                  short: "safety",
                  title: "Safety",
                  href: "/pages/serve/safety",
                  text: ``
                },
                {
                  short: "worship",
                  title: "Worship",
                  href: "/pages/serve/worship",
                  text: ``
                },
                {
                  short: "production",
                  title: "Production",
                  href: "/pages/serve/production",
                  text:  ``
                },
                {
                  short: "hillcrest-kids",
                  title: "Hillcrest Kids",
                  href: "/pages/serve/hillcrest-kids",
                  text: `HILLCREST KIDS
                  A vibrant children’s ministry is made possible by dedicated volunteers who serve the Lord through loving and leading
                  our youngest attenders. Your service in this vital ministry area will help ensure that Hillcrest is a place where
                  families thrive. Hillcrest Kids is staffed with volunteers who love children and are ready to be trained and
                  prepared to meet the needs of the little ones entrusted to us. Whether you’ve been a long time nursery volunteer
                  or are interested in becoming one now, we look forward to working together to create an excellent ministry
                  to children! (Please note that all volunteers who serve with children or students are required to submit to 
                   a background check.)`
                },
                {
                  short: "prayer",
                  title: "Prayer",
                  href: "/pages/serve/prayer",
                  text: ``
                },
                {
                  short: "care",
                  title: "Care",
                  href: "/pages/serve/care",
                  text: ``
                },
                {
                  short: "library",
                  title: "Library",
                  href: "/pages/serve/library",
                  text: ``
                },
                {
                  short: "special-events",
                  title: "Special Events",
                  href: "/pages/serve/special-events",
                  text: ``
                }
              ]
            }
          ]
        },
        support: {
          title: "Support",
          cat: "support",
          submenus: [
            {
              title: "Give",
              id: "give",
              links: [
                {
                  short: "give",
                  title: "Give Today",
                  href:"https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true"
                },
              ]
            },
            {
              title: "Community Involvement",
              id: "community-involvement",
              links: [
                {
                  short: "charlotterescuemission",
                  title: "Charlotte Rescue Mission",
                  href: "/pages/support/charlotte-rescue-mission",
                  text: "what"
                },
                {
                  short: "humancoalition",
                  title: "Human Coalition",
                  href: "/pages/support/human-coalition",
                  text: `Human Coalition`
                },
                {
                  short: "kingsdaughtersministry",
                  title: "King's Daughter's Ministry",
                  href: "/pages/support/kdm",
                  text: `kings daughter's ministry`
                },
                {
                  short: "mthollycommunityrelieforganizaion",
                  title: "Mt Holly Community Relief Organization",
                  href: "/pages/support/mt-holly-community-relief-organization",
                  text: "Mt Holly Community Relief Organization"
                }
              ]
            }
          ]
        },
        share: {
          title: "Share",
          cat: "share",
          submenus: [
            {
              title: "Gather",
              id: "gather",
              links: [
                {
                  short:"dicipleshipgroup",
                  title: "Dicipleship Group (D-Groups)",
                  href: "/pages/share/discipleship-group",
                  text:`Do it`

                }
              ]
            },
            {
              title: "Learning Resources",
              id: "learningResources",
              links: [
                {
                  short: "service-sermons",
                  title: "Service Sermons",
                  href: "/pages/share/service-sermons",
                  components: [
                    // (<ReactPlayer url= "https://soundcloud.com/hillcrestclt/confidence-to-enter" width="100%" height="100%" />),
                    ( <SermonTable />)
                  ]
                },
                {
                  short:"bookofthemonth",
                  title: "Book of The Month",
                  href: "/pages/share/book-of-the-month",
                  text: `Book of the Month`
                },
                { 
                  short: "readingplan",
                  title: "365 Reading Plan",
                  href: "/pages/share/365-reading-plan",
                  text: `365 reading plan`
                },
                {
                  short: "elibrary",
                  title: "E-Library",
                  href: "/pages/share/e-library",
                  text: `its Electric`
                }
              ]
            },
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
              <MainNav
                isOpen={this.state.isOpen}
                onPageChange={this.handlePageChange}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/connection" component={ConnectionCard} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route
                  path="/pages"
                  render={props => (
                    <PageTemplate {...props} allMenus={this.state.allMenus} />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            <Footer />
          </div>
        </AuthContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;