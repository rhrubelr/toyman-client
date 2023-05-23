import Swal from "sweetalert2";

const AddToys = () => {
    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const datetime = form.datetime.value;
        const category = form.category.value;
        const details = form.details.value;
        const seller = form.seller.value;
        const company = form.company.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const NewToy = { email, name, quantity, datetime, category, details, seller, company, photo }
        console.log(NewToy)

        // send data to server 
        fetch('https://assignment-11-server-seven-silk.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewToy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className="bg-sky-950 p-20">
            <h5 className="text-3xl font-bold text-center my-8 text-white">Add Toys</h5>

            <form onSubmit={handleAddToys} >
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Toys Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toys name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-2">
                        <label className="label">
                            <span className="label-text text-white">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="seller email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Toys Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="datetime-local" name="datetime" placeholder="Toys Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder=" coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Toy Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Toy details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Company name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="company" placeholder="Company" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Seller name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="seller name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white"> Toy Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>                    </div>
                </div>
                <input className="btn btn-primary md:w-full" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddToys;