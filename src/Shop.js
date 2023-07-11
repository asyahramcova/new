import React from "react";
import { useState } from "react";
import Clothes from "./Clothes";
import {data} from './data';
import './App.css'; 
import Buttons from "./Buttons";

function Shop(){
   const [clothes,setClothes] = useState(data);

   const chosenClothes = (searchName) =>{
      const newClothes = data.filter(element => element.searchName === searchName);
      setClothes(newClothes);
   }
  const allClothes = () =>{
      setClothes(data)
   }
   const chosenPet = (pet) =>{
      const onlyPet = data.filter(element => element.pet === pet);
      setClothes(onlyPet);
   }

   return(
      <div className="parent" >
         <Buttons chosenPet = {chosenPet} petClothes= {chosenClothes} allClothes ={allClothes}/>
         <Clothes itemsForSale = {clothes} />
      </div>
   )
}
export default Shop;