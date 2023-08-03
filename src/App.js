import React, {useState, useEffect} from "react";
import axios from "axios";
import './index.css';


const API_endpoint=`https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = `910a33961b1060dd527b82e8d15148f8`;

const App = () =>{

let[cord, setCord]=useState({latitude: "", longitude: ""});
let [hemisphere, setHemisphere]=useState("");
let [responseData, setResponseData]=useState({});
let [responseDataMain, setResponseDataMain]=useState({});
  //const getLocation=()=>{


 // function  findLocation(){
  
   //  if(navigator.geolocation){
   //     navigator.geolocation.getCurrentPosition((position)=>{
          //  setCord({latitude: position.coords.latitude , longitude: position.coords.longitude})
          //  findHemisphere(position.coords.latitude)
         // }
      //  )
     //   axios.get(`${API_endpoint}lat=${cord.latitude}&lon=${cord.longitude}&appid=${API_KEY}`)
    //    .then((response)=>{
    //      console.log(response.data)
   //     })
   //   }
  //  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        setCord({latitude: position.coords.latitude , longitude: position.coords.longitude})
        findHemisphere(position.coords.latitude)
      }
    )
    
  }, [])

 function find(){
  axios.get(`${API_endpoint}lat=${cord.latitude}&lon=${cord.longitude}&units=metric&appid=${API_KEY}`)
    .then((response)=>{
      setResponseData(response.data)
      setResponseDataMain(response.data.main)
    })
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
    <div className="main-container">
      <h1>This is Intikhab Islam</h1>
      <h1>Welcome to my weather app</h1>
      <button onClick={find} >Find location & Weather Details</button>
      <h1>City: {responseData.name}</h1>
      
      <h1>Temperature: {responseDataMain.temp}</h1>
      <h1>Max Temperature: {responseDataMain.temp_max}</h1>
      <h1>Min Temperature: {responseDataMain.temp_min}</h1>
      <h1>Temperature Feels Like: {responseDataMain.feels_like}</h1>
      {responseData && <h1>{hemisphere}</h1>}
    </div>
  )
}


export default App;