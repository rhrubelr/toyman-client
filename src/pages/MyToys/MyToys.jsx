import { useLoaderData } from "react-router-dom";
import ToyProducts from "../ToyProducts/ToyProducts";
import { useState } from "react";

const MyToys = () => {
    const products = useLoaderData();
    const [toys, setToys] = useState(products)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="container mx-auto">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Produnt Info</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th> price</th>
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