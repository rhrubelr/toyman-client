
const ToyCard = ({toy}) => {
    const {name,price, rating, image} = toy;
    console.log(toy)
    return (
        
            <div className="card w-70 h-90 bg-base-100 shadow-xl gap-5">
                <figure className="px-10 pt-10">
                    <img src={image}  className="rounded-xl h-50 w-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p> Price: {price}</p>
                    <p> Rating: {rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Veiw Details</button>
                    </div>
                </div>
            </div>
        
    );
};

export default ToyCard;