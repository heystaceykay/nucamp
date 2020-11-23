import React, { Component } from 'react';
import Directory from './DirectoryComponent';
// import { CAMPSITES } from '../shared/campsites';
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         // selectedCampsite: null
    //         comments: COMMENTS,
    //         partners: PARTNERS,
    //         promotions: PROMOTIONS
    //     }
    // }

    // onCampsiteSelect(campsiteId) {
    //     //In React, never update state directly (ex. this.state.selectedCampsite = campsite;)
    //     //constructor is only place where you can update state directly
    //     //always use setState so react can update the DOM correctly
    //     //React is doing some things behind the scenes (declarative)
    //     this.setState({ selectedCampsite: campsiteId });
    // }

    render() {
        // Arrow functions inherit the this of their parent scope
        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({ match }) => {
            return (
                // When you have a number stored as a string and you want to convert it to a number + is a quick way
                <CampsiteInfo
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    {/* acts like case in switch */}
                    <Route path='/home' component={HomePage} />
                    {/* <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} /> */}
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                    {/* acts like default in a JS switch statement: catchall */}
                    <Redirect to='/home' />
                </Switch>
                {/* <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} /> */}
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));