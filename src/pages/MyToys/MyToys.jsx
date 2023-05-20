import { useLoaderData } from "react-router-dom";
import ToyProducts from "../ToyProducts/ToyProducts";

const MyToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto container">
                {
                    toys.map(toy => <ToyProducts
                        key={toy._id}
                        toy={toy}
                    ></ToyProducts>)
                }
            </div>
        </div>
    );
};

export default MyToys;