// eslint-disable-next-line react/prop-types
const Cardselect = ({selectCard,craditRemanining, totalCradit, totalCost}) => {
    return (
        <div className="">
            <p className="text-[#2F80ED] font-bold">Credit Hour Remaining {craditRemanining}hr</p>
            <hr></hr>
            <h2 className="font-bold">Course Name</h2>
            <ol className="list-decimal pl-5">
            {selectCard.map((card)=>(
                  <li key={card.id}>{card.title}</li>  
            ))}
             </ol>
            <hr></hr>
            <h2 className="text-[#1C1B1BCC]">Total Credit Hour : {totalCradit}</h2>
            <hr></hr>
            <h2 className="text-[#1C1B1BCC]">Total Price : {totalCost} USD</h2>
        </div>
    );
};

export default Cardselect;