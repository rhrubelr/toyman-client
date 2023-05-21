import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const views = useLoaderData()
    console.log(views)
    const { _id, name, price, rating, image, company } = views;

    return (
        <div className='mx-auto '>
            <div className="mx-auto card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">name: {name}</h2>
                    <p>rating: {rating}</p>
                    <p>price: {price}</p>
                    <p>company: {company}</p>

                    <div className="card-actions">
                        <Link to={'/'}>
                            <button className="btn btn-primary">Back to card</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;