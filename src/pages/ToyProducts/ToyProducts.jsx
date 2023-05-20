import React from 'react';

const ToyProducts = ({ toy }) => {
    const { name, quantity, datetime, category, details, seller, company, photo } = toy;

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
                    <p> company: {company}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyProducts;