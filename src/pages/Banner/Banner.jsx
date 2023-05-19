
const Banner = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-3xl my-2">This is baby Toy Store</h2>
            <div className="carousel w-3/4 mx-auto h-3/4 ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/HC5Vq4D/4.webp" className=" h-3/4 w-full mx-auto  " />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/kxzGNck/1-a6e08ebb-46eb-4402-84b4-7cd13ededd8d-1.webp" className=" h-3/4 w-full mx-auto  " />                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co/pwKvJC5/2.webp" className=" h-3/4 w-full mx-auto  " />                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;