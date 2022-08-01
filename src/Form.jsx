import React, { useState } from "react";

function Form(props) {
  
  const [inputs, setInputs] = useState({});
  const [parking, setParking] = useState({"longitude": 114.17016, "latitude": 22.33581});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <hr class="hr-text" data-content="FORM"/>
                <h5 class="mt-3 mb-3">
                  Please enter the details of your ticket:
                </h5>
                <form onSubmit={handleSubmit}>
                  <div class="input-group mt-3 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mt-3 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">License plate</span>
                    <input type="text" class="form-control" name="licenseplate" value={inputs.licenseplate || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="mt-3 mb-3">
                    <label for="date">Date</label>
                    <input id="date" class="form-control" name="date" value={inputs.date || ""} onChange={handleChange} type="date" />
                    <span id="startDateSelected"></span>
                  </div>
                  <div class="mt-3 mb-3">
                    <label for="time">Time</label>
                    <input id="time" class="form-control" name="time" value={inputs.time || ""} onChange={handleChange} type="time"  />
                    <span id="startDateSelected"></span>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="reminder" value={inputs.reminder || ""} onChange={handleChange} id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      I would like to create a calendar reminder for payment
                    </label>
                  </div>
                  <select class="form-select mt-3 mb-3" aria-label="Default select example" name="reminderDay" value={inputs.reminderDay || ""} onChange={handleChange}>
                    <option selected>Reminder on which day prior to payment date</option>
                    <option value="1">One day</option>
                    <option value="2">Two days</option>
                    <option value="3">Three days</option>
                  </select>
                  <div class="mt-3 mb-3">
                    <em>Now please drag the marker to where your car is parked → </em>
                  <div class="mt-3 mb-3">Currently parked in longitude {parking.longitude.toFixed(2)} and latitude {parking.latitude.toFixed(2)}</div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg mb-5" >Submit</button>
                </form>
    </div>
  );
}

export default Form;