import React from 'react';
import Swal from 'sweetalert2';

const ToyProducts = ({ toy, toys, setToys }) => {
    const { _id, name, quantity, email, datetime, category, details, seller, company, photo } = toy;

    const handleDelete = (_id) => {
        console.log('this is delete', _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-seven-silk.vercel.app/toys/${_id}`,{
                    method: 'DELETE'
                
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaing = toys.filter( pd => pd._id !== _id)
                            setToys(remaing)
                        }

                    })
            }
        })
    }
    return (

        <tbody >



            {/* row 4 */}
            <tr >

                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{quantity}</div>
                        </div>
                    </div>
                </td>
                <td>
                    date time : {datetime}
                    <br />
                    <span className="badge badge-ghost badge-sm">Seller Name: {seller}</span>
                </td>
                <td> Email : {email}</td>
                <th className='flex justify-center items-center gap-2'>
                    <button className="btn  btn-accent">Edit</button>
                    <button  onClick={() => handleDelete(_id)} className="btn  btn-primary me-4">Delete</button>
                </th>
            </tr>



        </tbody>

    );
};

export default ToyProducts;