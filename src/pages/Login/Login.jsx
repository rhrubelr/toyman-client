import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)        
    }
    return (
        <div  className='mb-10  container mx-auto bg-cyan-950 rounded-lg py-10'>
            <h3 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Login</h3>
            <form onSubmit={handleLogin} className="form-control w-full max-w-xs mx-auto">

                <label className="label">
                    <span className="label-text font-bold text-white">What is your Email ?</span>

                </label>
                <input type="email" name='email' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold text-white">What is your Password?</span>

                </label>
                <input type="password" name='password' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />


                <button className=' my-2 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' type='submit'>Login</button>
                <div className='flex'>
                    <button className='btn btn-info w-1/2 mt-2' type='submit'> <span className='text-2xl me-2'> <FaGithub /> </span> Github</button>
                    <button className='btn btn-primary w-1/2 mt-2' type='submit'> <span className='text-red-400 me-2 text-2xl'><FaGoogle></FaGoogle></span>       Google</button>
                </div>
                <p className='text-white'>Do you new this website? please <span className='link active-link'><Link to='/registration'>registration</Link></span></p>
            </form>

        </div>
    );
};

export default Login;