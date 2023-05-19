import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ToyCard from "../ToyCard/ToyCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {

    const [toys, setToys] = useState([]);
    console.log(toys)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeToys.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const babyToys = () => {
        const filter = products.filter(product => product.category == 'baby toy')
        console.log(filter)
        setToys(filter)

    }
    const babyBed = () => {
        const filter = products.filter(product => product.category == 'baby bed')
        console.log(filter)
        setToys(filter)
    }
    // const babyToysChair = () => {
    //     const filter = products.filter(product => product.category == 'baby chair')
    //     console.log(filter)
    //     setToys(filter)
    // }
    const babyToysPuzzle = () => {
        const filter = products.filter(product => product.category == 'baby puzzle')
        console.log(filter)
        setToys(filter)
    }

    return (
        <div>
            <Banner></Banner>

            <h4 className="text-center font-bold text-3xl text-red-500 mb-10">Baby shop Corner: {toys.length}</h4>


            <Tabs>
                <TabList>
                    <Tab >All Toys</Tab>
                    <Tab onClick={() => babyToys()}>baby Toys</Tab>
                    <Tab onClick={() => babyBed()}>baby bed</Tab>
                    {/* <Tab onClick={() => babyToysChair()}>play store</Tab> */}
                    <Tab onClick={() => babyToysPuzzle()}>baby puzzle</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                        {
                            toys.map(toy =>
                                <ToyCard
                                    key={toy.id}
                                    toy={toy}
                                ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                        {
                            toys.map(toy =>
                                <ToyCard
                                    key={toy.id}
                                    toy={toy}
                                ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                        {
                            toys.map(toy =>
                                <ToyCard
                                    key={toy.id}
                                    toy={toy}
                                ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                        {
                            toys.map(toy =>
                                <ToyCard
                                    key={toy.id}
                                    toy={toy}
                                ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto m-2">
                        {
                            toys.map(toy =>
                                <ToyCard
                                    key={toy.id}
                                    toy={toy}
                                ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Home;