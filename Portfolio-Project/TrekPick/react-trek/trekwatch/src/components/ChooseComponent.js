import React, { Component } from 'react';
import { Button } from 'reactstrap';


function watchSelector() {
          let series = 'Star Trek: The Next Generation';
          let episode = 0;
          const season = Math.floor(Math.random() * 7) + 1;
          console.log('PRE-SWITCH STATEMENT: You should watch ' + series + '.\nseason ' + season + ', episode ' + episode + '.');
          
          switch (season) {
               case 1:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
                    episode = Math.floor(Math.random() * 26) + 1;
                    alert('You should watch Star Trek: The Next Generation:\n season ' + season + ', episode ' + episode + '.');
                    break;
               case 2: 
                    episode = Math.floor(Math.random() * 22) + 1; 
                    alert('You should watch Star Trek: The Next Generation:\n season ' + season + ', episode ' + episode + '.');
                    break;
               default: 
                    episode = Math.floor(Math.random * 178) + 1;
                    alert('You should watch Star Trek: The Next Generation:\n season ' + season + ', episode ' + episode + '.');
                    break;
          };

          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode ' + episode + '.');
     };
     
class Engage extends Component {
     render() {
          return (
               <div>
               <div>Which episode should you watch?</div>
               <Button size="lg" onClick={watchSelector}>Engage</Button>
               <div className="box">Other Star Trek series coming soon!</div>
               </div>
               
          );
     }
}

export default Engage;