
import { useState } from "react";


function Clothes({itemsForSale}){

const [showText, setShowText] = useState (false);

  const showTextClick = (element) =>{
  element.showMore = !element.showMore;
    setShowText(!showText)
  }

   return(
      <div  className="products">
        {itemsForSale.map((element =>{
         const {id,description,  showMore, searchName, price, image} = element;
         return(
            <div key ={id} className="product-card" >
              
               <img src = {image} className="card-image"  alt = "petClothes" />
               <div className="product-cardTwo">
                  <h2>{searchName}</h2>
                  <h4>$ {price}</h4>
                  <p >{showMore ? description : description.substring(0, 20) + "......"} <button className="showMore"  onClick ={() => showTextClick(element)} > {showMore ? "Show less" : "ShowMore"} </button></p>
              
            
               </div>
            </div>
         )
         
        }))}
        
      </div>
   )
}
export default Clothes;