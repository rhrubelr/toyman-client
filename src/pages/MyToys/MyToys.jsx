import { useLoaderData } from "react-router-dom";
import ToyProducts from "../ToyProducts/ToyProducts";
import { useState } from "react";

const MyToys = () => {
    const products = useLoaderData();
    const [toys, setToys] = useState(products)
    return (
        <div>
            <div className="overflow-x-auto w-full container mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>
                                <label>
                                    <th> Product Name</th>
                                </label>
                            </th>

                            <th>Produnt Info</th>
                            <th>Email</th>
                            <th>Delete and Edit</th>
                            {/* <th> price</th> */}
                            <th></th>
                        </tr>
                    </thead>


                    {
                        toys.map(toy => <ToyProducts
                            key={toy._id}
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                        ></ToyProducts>)
                    }
                </table>
            </div>


        </div>
    );
};

export default MyToys;