
import logo from '../../../../public/images/flogo.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200  text-base-content bg-black text-white">
        <aside>
          <img className='w-48 ' src={logo} alt=''/>
          
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">All Car Decoration</a> 
          <a className="link link-hover">Painting</a> 
          <a className="link link-hover">Denting</a> 
          <a className="link link-hover">Wiring</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;