import React from "react";

import  Main  from './main.avif';


import './App.css'; 

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
export default Home;
