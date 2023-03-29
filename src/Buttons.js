
function Buttons({chosenPet,petClothes}){

   return(
      <div className="cont" >
          <button className="change"  onClick={() => chosenPet("cat")} >All</button>
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