import { useEffect } from "react";
import { useState } from "react";
import './card.css'
import Dollar from './icon/Dollar';
import Book from './icon/Book';
import Cardselect from './Cardselect';
import Swal from 'sweetalert2';


const Card = () => {
    const [cards, setCards] = useState([]);
    const [selectCard, setselectCard] = useState([]);
    const [totalCost, settotalCost] =useState([]);
    const [craditRemanining, setcraditRemanining] =useState(20);
    const [totalCradit, settotalCradit] =useState([]);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);
    const handalBtnClcik =(card)=>{
      let totalCost =card.price;
      let craditCount =card.cradit;
      let totalCraditRemaining= 20-card.cradit;
      const isExist = selectCard.find((item)=> item.id==card.id)
      if(isExist){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already booked",
          footer: '<a href="">You already booked this course</a>',
        });
      }else{
        selectCard.forEach((item)=>{
          totalCost =totalCost+item.price;
          craditCount=craditCount+item.cradit;
          totalCraditRemaining = totalCraditRemaining-item.cradit;
        });
         if(totalCraditRemaining<0){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cradit limit reached",
            footer: '<a href="">Your cradit limit up to 20 Hr.</a>',
          });
  
         }else{
          settotalCost(totalCost);
          setcraditRemanining(totalCraditRemaining);
          settotalCradit(craditCount);
          setselectCard([...selectCard, card]);
         }
        
      }
        
    };
    console.log(selectCard);
    return (
        <div className="container">
            <div className="main-container flex">
            <div className="card-container grid gap-4 grid-cols-3">
                {
cards.map((card) =>(
 
// eslint-disable-next-line react/jsx-key
<div key={card.id} className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={card.img} alt="C" /></figure>
  <div className="card-body">
    <h2 className="card-title">{card.title}</h2>
    <p className="card-dis">{card.dis}</p>
    <div className="card-price flex">
 <p><Dollar></Dollar>Price :{card.price}</p>
<p><Book></Book> Credit :{card.cradit}hr</p>
</div>
    <div className="card-btn">
      <button className="btn btn-primary" onClick={()=>handalBtnClcik(card)}>Select</button>
    </div>
  </div>
</div>
))}
</div>
<div className=" ml-16 w-80">
<Cardselect selectCard={selectCard} craditRemanining={craditRemanining} totalCost={totalCost} totalCradit={totalCradit}>

</Cardselect>
</div>
        </div>
        </div>

    );
};

export default Card;