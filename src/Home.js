import React from "react";
import  Main  from './main.avif';
import './App.css'; 

function Home(){
   return(
      <div className="cont">
         <div className="text-cont">
            <h1 className="text"  >Glam Pets Shop</h1>
         </div>
      
         <div className="photo-cont" >
            <img src={Main} alt = 'photo' className="photo" />
         </div>
      
      </div>
   )
}
export default Home;

/*
function Home(){
   return(
      <div   >
         <div className="cont" >
            <h1 className="text"  >Glam Pets Shop</h1>
            <img src={Main} alt = 'photo' className="photo" />
         </div>
      </div>
   )
}
export default Home;*/
