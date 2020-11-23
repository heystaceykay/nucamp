// $(document).ready(function(){
//     $('#emailBut').click(function() {
//         $('#eUp').modal('show');
//     });

//     $('#eUp').click(function() {
//         $('#emailBut').modal('show');
//     });

//     $('#closeEm').click(function() {
//         $('#eUp').modal('hide');
//     });
// });

// $(document).ready(function() {
//     $(createBlueprint());
// });

// function createBlueprint() {

//     function showBlueprint() {
//         document.getElementById('myLumber').innerHTML = "Text" + eWidth + ", episode " + hDiff + ".</span></p>";
//         }

//         document.getElementById('myBlueprint').innerHTML = "Text" + eWidth + ", episode " + hDiff + ".</span></p>";
//         }


function createBlueprint() {
     document.getElementById('myBlueprint').innerHTML = "<p>You've been assigned <span>season " + season + ", episode " + episode + ".</span></p>";
     }



function createGreenprint() {
     document.getElementById('myGreenprint').innerHTML = lumber
}


     let eW = getElementById('#eWidth');
     let hD = getElementById('#hDiff');

     let materials = tools + supplies + lumber;
     
     let tools = `<div class="card-deck">
     <div class="card border-light">
       <div class="card-body">
         <h3 class="card-title">Tools</h3>
         <ul class="shopping-list">
           <li>Circular Saw</li>
           <li>Saw Guide (any straight edge)</li>
           <li>(2) Clamps</li>
           <li>Chop Saw (optional)</li>
           <li>Cordless Drill</li>
           <li>Combination pilot hole / countersink bit</li>
           <li>Chalk Line (optional)</li>
         </ul>
       </div>
     </div>
       </div>`;

     let supplies = `<div class="row col col-sm-5" max-width=25%>
     <div class="card border-light">
       <div class="card-body">
         <h3 class="card-title">Supplies</h3>
         <ul class="list-unstyled shopping-list">
           <li>(24) 3-inch galvanized deck screws</li>
           <li>(24) 1-5/8 inch wood screws</li>
           <li>Paint or DeckOver</li>
         </ul>
       </div>
     </div>
   </div>`;

   let lumber = `<div class="card border-light">
   <div class="card-body">
     <h3 class="card-title">Lumber</h3>
     <ul>
     <li><span id="myLumber1"></span> - 2" x 4" x 8' boards</li>
     <li><span id="myLumber2"></span> - 2" x 8" x 8' boards</li>
     <li><span id="myLumber3"></span> - 4' x 8' x 3/4" boards, plywood or OSB</li>
     </ul>
   </div>
 </div>`;



     function lumberFormula() {
       
       if (eW < 24 || ew < 36 ) {
         document.getElementById('myLumber4').innerHTML = "Your entryway is not within the acceptable size range for this application at this time. <a href='#eUp'>Please sign up for our newsletter to recieve information on future developments!";
       }
         else {
           document.getElementById('myLumber4').innerHTML = "4 ft x 8 ft piece of plywood or OSB ";
         }
       
       if (hD > 8) {
         document.getElementById('myLumber3').innerHTML = "2 - ";
       } 
         else {
           document.getElementById('myLumber3').innerHTML = "1 - ";
         }
     
         
     
       };
     
     
     function viewPlans() {
       document.getElementById('myBlueprint').innerHTML = 
       
       `<h3>Step One</h3><p>Aquire your above materials and lumber.</p>

       ${materials}

       <h3>Step Two</h3><p>
       
       `;
     }



createBlueprint();




function Lumber1(hDiff,eWidth) {
     let result = num1 * num2;
     return result;
   }



// // The narrowest available wheelchairs are 24.5 inches wide, so there is
// // no reason to create a ramp with a smaller width than that.

// // ADA compliance mandates that doors have a width of 32 inches, so that
// // will be the assumed default size if no measurements are specified.

// // Dependent upon the needs of the person using the ramp, you do have options.