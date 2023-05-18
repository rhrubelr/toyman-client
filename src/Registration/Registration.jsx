import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className='mb-10 container w-50 mx-auto bg-cyan-950 rounded-lg py-10'>
            <h2 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Register Your Account </h2>

            <form  className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text font-bold">What is your name ?</span>

                </label>
                <input type="text" name='name' placeholder="name" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your image URL ?</span>

                </label>
                <input type="text" name='photo' placeholder="photo url" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Email ?</span>

                </label>
                <input type="email" name='email' placeholder="email" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Password?</span>

                </label>
                <input type="password" name='password' placeholder="password" required className="input input-bordered w-full max-w-xs" />

                <button className='btn btn-accent mt-2' type='submit'>Register</button>

                <p className="text-white">Already have an account <span className="text-white"> <Link className='link link-primary' to="/login">Login</Link></span></p>

            </form>
        </div>
    );
};

export default Registration;