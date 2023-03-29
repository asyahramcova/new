import React from "react";
import {useState} from "react";
import { dataReviews } from "./dataReviews";
import './App.css'; 

function Reviews() {
  const [person, setPerson] = useState (0);
  const {id, name, image} =  dataReviews[person];
 


  const previous = () =>{
    setPerson((person) =>{
      person --;
      if(person < 0){
        return  dataReviews.length-1;
      }
      return person;
    })
  }

  const next = () =>{
    setPerson((person) =>{
      person++;
      if(person >  dataReviews.length-1){
      person = 0;
      }
      return person;
    })
  }
  
  return(
      <div  className="parent">
        <div className="review-card">
        <div className="parent">
            <img  className="review-image" src ={image} alt="photo" />
            <h1> {name}</h1>
        </div>   
        
        <div >
            <button className='change' onClick={previous} ><i className="arrow left"></i> Previous</button>
            <button  className='change' onClick={next}>Next <i className="arrow right"></i></button>
        </div>
        </div>
    </div>
  )
}

export default Reviews;
