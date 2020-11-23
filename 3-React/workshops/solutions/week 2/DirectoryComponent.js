import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

//Making use of JS class inheritance to create a child class form the Component parent class
class Directory extends Component {
    //not required except in certain cases
    //when creating a constructor within class component, must include props arg
    constructor(props) {
        //this.props = props is inherited from base component in parent class.
        super(props);
        //special property in React, always holds an object
        //local state - other components cannot see it
        this.state = {
            selectedCampsite: null,
        };
    }

    onCampsiteSelect(campsite) {
        //In React, never update state directly (ex. this.state.selectedCampsite = campsite;)
        //constructor is only place where you can update state directly
        //always use setState so react can update the DOM correctly
        //React is doing some things behind the scenes (declarative)
        this.setState({selectedCampsite: campsite});
    }

    // renderSelectedCampsite(campsite) {
    //     if(campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>   
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {/* use curly brace for JS */}
                    {directory}
                </div>
                {/* <ExampleParentComponent /> */}
                {/* <div classNamne="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
                <CampsiteInfo campsite={this.state.selectedCampsite} />
            </div>
        );
    }
}

// class ExampleParentComponent extends Component {
//     //since this component holds local state it needs constructor
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 333
//         }
//     }
//     render() {
//         //props can pass a string literal
//         return <ExampleChildComponent number={this.state.number} greeting="Hello World" />
//     }
// }

// class ExampleChildComponent extends Component {
//     render() {
//         //props is a read-only variable b/c "one way data flow archiecture"
//         return <div>{this.props.number} {this.props.greeting} </div>
//     }
// }

export default Directory;