import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mb-10">
            <div className="navbar bg-emerald-300">
                <div className="navbar-start">
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
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
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
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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