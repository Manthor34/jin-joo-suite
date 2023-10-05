import { Link, useLocation } from 'react-router-dom';
import logoInsta from '../assets/images/logoInsta.png';
import logoFb from '../assets/images/logoFb.png';

function Footer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/contact" && (
        <div className='contactAdress'>
          <hr className='contactHr'/>
          <p className='contactPara'>12 avenue Antoine Dutrievoz 69100 Villeurbanne</p> 
        </div>
      )}
      <div className='footer'>
        <hr className='hrFooter'/>
        <p className='HQ'>Woko Holding</p>
        <div className='contacts'>
          <Link className='contact contact1' to="/contact">contact</Link>
          <Link className='contact' to="/mentions">mentions légales</Link>
        </div>
        <div className='socials'>
          <a className='socialContainer' href="https://www.instagram.com/jinjoo_food/?hl=fr">
            <img className='social' src={logoInsta} alt="Instagram"/>
          </a>
          <a className='socialContainer' href="https://www.facebook.com/jinjoo.food">
            <img className='social' src={logoFb} alt="Facebook"/>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
