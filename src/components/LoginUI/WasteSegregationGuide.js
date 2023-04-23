import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WasteSegregationGuide() {
  const [location, setLocation] = useState({});
  const [wasteSchedule, setWasteSchedule] = useState({});
  var x=document.getElementById("demo")
  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setLocation({ latitude: lat, longitude: lng });

    const data = { latitude: lat, longitude: lng };
    axios
      .post("http://localhost:8080/api/fetcher", data)
      .then((response) => {
        console.log(response);
        setWasteSchedule(response.data);
      })
      .catch((error) => {
        console.log(error);
        x.innerHTML += {error};
      });
  }

  return (
    <>
      <div>
        <h1>Waste Collection Schedule</h1>
        {location.latitude && location.longitude && (
          <p>
            Latitude: {location.latitude}
            <br />
            Longitude: {location.longitude}
          </p>
        )}
        {wasteSchedule && (
          <p id="demo">Waste Collection Schedule: {JSON.stringify(wasteSchedule)}</p>
        )}
      </div>
    </>
  );
}


