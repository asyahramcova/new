import {data} from './data';
function Buttons({chosenPet,petClothes, allClothes}){

   return(
      <div className="btn-cont" >
         <button className="change"  onClick={() => allClothes(data)} >All</button>
         <button className="change"  onClick={() => chosenPet("cat")} >Cats</button>
         <button className="change"  onClick={() => chosenPet("dog")} >Dogs</button>
         <button className="change" onClick={() => petClothes("accessories")}  >Accessories</button>
         <button className="change" onClick={() =>  petClothes("hoodie")} >Hoodies</button>
         <button className="change" onClick={() => petClothes("pajamas")}>Pajamas</button>
         <button className="change" onClick={() => petClothes("toys")}>Toys</button>
      </div>
   )
}

export default Buttons;