import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const ToyCard = ({ toy }) => {
    const {_id, name, price, rating, image } = toy;
    console.log(toy)
    console.log(_id)
    return (

        <div className="card w-70 h-70 bg-base-100 shadow-xl gap-5">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl h-50 w-50" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p className="m-0"> Price: ${price}</p>
                <p className="m-0"> Rating: {rating} <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary">Veiw Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ToyCard;