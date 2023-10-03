import React, { useState } from 'react';
import '../Styles/Contact.css';
import emailjs from 'emailjs-com';
import Footer from '../components/MainFooter';


function Contact() {


    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [objetDuMessage, setObjetDuMessage] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [sendError, setSendError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!nom || !prenom || !message) {
        setErrors({
            nom: !nom && 'Nom is required',
            prenom: !prenom && 'Prenom is required',
            message: !message && 'Message is required',
        });
        return;
        }
    
        setIsSending(true);
    
        const templateParams = {
        from_name: `${prenom} ${nom}`,
        subject: objetDuMessage || 'New message from your website',
        message,
        };
    
        emailjs
        .send(
            window.REACT_APP_EMAILJS_SERVICE_ID,
            window.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            window.REACT_APP_EMAILJS_USER_ID
        )
        .then(
            (result) => {
            console.log(result.text);
            setIsSending(false);
            setIsSent(true);
            setNom('');
            setPrenom('');
            setObjetDuMessage('');
            setMessage('');
            setErrors({});
            },
            (error) => {
            console.log(error.text);
            setIsSending(false);
            setSendError('There was an error sending your email. Please try again later.');
            }
        );
    };
    

    return (
        <div className="container">
            <div className='bgContact'>
                <h1 className='contactTitle'>CONTACT</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                            id="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            required
                        />
                        {errors.nom && (
                            <div className="invalid-feedback">{errors.nom}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input
                            type="text"
                            className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
                            id="prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            required
                        />
                        {errors.prenom && (
                            <div className="invalid-feedback">{errors.prenom}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="objetDuMessage">Objet du Message (optional)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="objetDuMessage"
                            value={objetDuMessage}
                            onChange={(e) => setObjetDuMessage(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            id="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        {errors.message && (
                            <div className="invalid-feedback">{errors.message}</div>
                        )}
                    </div>
                    <button type="submit" className="send-button" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
                <hr className='contactHr'/>
                <p className='contactPara'>communication@woko.fr</p>
                <p className='contactPara'>12 avenue Antoine Dutrievoz 69100 Villeurbanne</p>
            </div>
            <Footer/>
        </div>
    );
    
}

export default Contact;