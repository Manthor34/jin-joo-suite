import React from 'react';
import '../Styles/Contact.css';
import logoInsta from '../assets/images/logoInsta.png';
import logoFb from '../assets/images/logoFb.png';

function Contact() {

    return (
        <>
            <div className='bgContact'>
                <h1 className='contactTitle'>CONTACT</h1>
                <hr className='contactHr'/>
                <p className='contactPara'>communication@woko.fr</p>
                <p className='contactPara'>12 avenue Antoine Dutrievoz 69100 Villeurbanne</p>
            </div>
            <div className='footer'>
                <hr className='hrFooter'/>
                <p className='HQ'>Woko Holding</p>
                <div className='contacts'>
                    <a className='contact contact1' href="https://jin-joo.fr/#/contact">contact</a>
                    <a className='contact' href="https://jin-joo.fr/#/mentions">mentions légales</a>
                </div>
                <div className='socials'>
                    <a className='socialContainer' href="https://www.instagram.com/jinjoo_food/?hl=fr"><img className='social' src={logoInsta}/></a>
                    <a className='socialContainer' href="https://www.facebook.com/jinjoo.food"><img className='social' src={logoFb}/></a>
                </div>
            </div>
        </>
        
    );
}

export default Contact;