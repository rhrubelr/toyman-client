import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mb-10 ">
            <div className="navbar bg-emerald-300 ">
                <div className="navbar-start container">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <li tabIndex={0}>
                                <Link to='/allToys'>
                                    <a className="justify-between">
                                        All Toys
                                    </a>
                                </Link>

                            </li>
                            <Link to='/myToys'>
                                <li><a>My Toys</a></li>
                            </Link>
                            <Link to='/addToy'>
                                <li><a>Add a Toys</a></li>
                            </Link>
                            <Link to='/blogs'><li><a>Blogs</a></li></Link>
                        </ul>
                    </div>
                    <img className="h-10 w-10" src="data:image/jpeg;base64,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" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Toy Man</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <li tabIndex={0}>
                            <Link to='/allToys'>
                                <a>
                                    All Toys
                                </a>
                            </Link>

                        </li>
                        <Link to='/myToys'>
                            <li><a>My Toys</a></li>
                        </Link>
                        <Link to='/addToy'>
                            <li><a>Add a Toys</a></li>
                        </Link>
                        <Link to='/blogs'><li><a>Blogs</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><a className="btn">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;