import React from 'react';

const AllProducts = ({ allToy }) => {
    const { name, quantity,email, datetime, category, details, seller,  photo } = allToy;

    console.log(allToy)
    return (
        <div>
            <div className="card h-100 w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <img className='h-20 w-30' src={photo} alt="" />
                    <h2 className="card-title"> name: {name}</h2>
                    <p> quantity: {quantity}</p>
                    <p> date and time: {datetime}</p>
                    <p> category: {category}</p>
                    <p> details: {details}</p>
                    <p> seller: {seller}</p>
                    <p> email: {email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;