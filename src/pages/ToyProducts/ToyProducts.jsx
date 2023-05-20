import React from 'react';

const ToyProducts = ({ toy }) => {
    const { name, quantity,email, datetime, category, details, seller, company, photo } = toy;

    return (




        <tbody >
            


            {/* row 4 */}
            <tr >
                
                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{quantity}</div>
                        </div>
                    </div>
                </td>
                <td>
                    product name: {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td> Email : {email}</td>
                <th className='flex justify-center items-center'>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button className="btn btn-ghost btn-primary">Delete</button>
                </th>
            </tr>


            
        </tbody>

    );
};

export default ToyProducts;