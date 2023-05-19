import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ToyCard from "../ToyCard/ToyCard";

const Home = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('fakeToys.json')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h4 className="text-center font-bold text-3xl text-red-500 mb-10">Baby shop Corner: {toys.length}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                {
                    toys.map(toy => 
                    <ToyCard
                        key={toy.id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Home;