import { Link } from "react-router-dom";
import logo from '../../../../public/images/logo.png'


const Header = () => {
    const nav = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav}
              
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
           <img className="w-24" src={logo} alt="" />
           {/* <h1 className="text-3xl">Car Solution</h1> */}
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {nav}
           
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appoinment</button>
        </div>
      </div>
    );
};

export default Header;