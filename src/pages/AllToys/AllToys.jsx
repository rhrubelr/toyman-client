import { useLoaderData } from "react-router-dom";
import AllProducts from "../allProducts/allProducts";

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    allToys.map(allToy => <AllProducts
                        key={allToy._id}
                        allToy={allToy}
                    ></AllProducts>)
                }
            </div>
        </div>
    );
};

export default AllToys;