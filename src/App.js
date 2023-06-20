import React, {useState} from "react";

const App = () =>{

let[cord, setCord]=useState({latitude: "", longitude: ""})
let [hemisphere, setHemisphere]=useState("")
  //const getLocation=()=>{


  function findLocation(){
     if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            setCord({latitude: position.coords.latitude , longitude: position.coords.longitude})
            findHemisphere(position.coords.latitude)
          }
        )
      }
    }
 // }
 function findHemisphere(latitude){
  if(latitude>0){
    setHemisphere("Northern Hemisphere")
  }else if(latitude<0){
    setHemisphere("Southern Hemisphere")
  }else if(latitude==0){
    setHemisphere("Equator")
  }
 }


  return(
    <div>
      <h1>Latitude: {cord.latitude} , Longititude: {cord.longitude} </h1>
      <button onClick={findLocation}>Find location</button>
      <h1>{hemisphere}</h1>
    </div>
  )
}


export default App;