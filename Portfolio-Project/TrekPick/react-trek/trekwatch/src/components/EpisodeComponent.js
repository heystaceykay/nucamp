import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardTitle, Button } from 'reactstrap';
import { TNGEpisode } from './ChooseComponent';
import { VOYEpisode } from './ChooseComponent';
import { watchSelector } from './ChooseComponent';


class Episode extends Component {
     render() {
          return (
               <div>
                    <Card>
                         <CardImg top width="100%" src={'public/assets/tng.png'} alt="Star Trek: The Next Generation" />
                         <CardBody>
                              <CardTitle>Star Trek: The Next Generation</CardTitle>
                              <CardText>What should you watch?</CardText>
                              <Button color="primary" onClick={TNGEpisode()}>The Next Generation</Button>
                              <Button color="primary" onClick={VOYEpisode()}>Voyager</Button>
                              <Button color="primary" onClick={watchSelector()}>Either one!</Button>
                         </CardBody>
                    </Card>
               </div>
          )
     }
};

export default Episode;