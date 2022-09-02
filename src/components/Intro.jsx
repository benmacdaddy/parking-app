import React from "react";

function Intro() {
  return (
    <div class="container text-center">

                <h5 class="container text-center py-3"> 
                Record your parking tickets conveniently through a handy form &
                </h5>
                <p>Manage your payment for parking tickets</p>
                <p>Record time and geospatial data for tracking</p>
                <p>Predict parking trends</p>
                <h6 class="list-group mb-5"><a href={"http://localhost:3000/authpage"}> Start recording now</a></h6>
                {/* <ol class="list-group mb-4">
                  <li class="list-group-item">Manage your payment for parking tickets</li>
                  <li class="list-group-item">Record time and geospatial data for tracking</li>
                  <li class="list-group-item">Predict parking trends</li>
                </ol> */}
    </div>
  );
}

export default Intro;