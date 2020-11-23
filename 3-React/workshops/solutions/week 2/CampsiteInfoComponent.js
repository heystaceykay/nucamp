import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <h1>HELLO!</h1>
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div class="col-md-12 m-1">
                    <h4>Comments!!!</h4>
                    {comments.map(comment => {
                        return (
                            comment.text + "\n" + "--"
                            + comment.author + ", "
                            + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))
                        )
                    })}
                </div>
            )
        }
        return <div></div>
    }

    render() {
        if (this.props.campsite) {
            return (
                <div class="col-md-5 m-1">
                    <h1>CampsiteInfo is rendering!</h1>
                    {this.renderCampsite(this.props.campsite)}                  
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        }
        return <div></div>
    }
}

export default CampsiteInfo;