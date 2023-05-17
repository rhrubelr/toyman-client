import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h4>this is header</h4>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;