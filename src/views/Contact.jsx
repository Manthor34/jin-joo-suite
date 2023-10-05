import React, { useState } from 'react';
import '../Styles/Contact.css';
import emailjs from 'emailjs-com';
import Footer from '../components/MainFooter';

const Contact = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState(''); 
    const [objetDuMessage, setObjetDuMessage] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(false);

        if (!nom || !prenom || !email || !message) {
            setErrors({
                nom: !nom && 'Nom is required',
                prenom: !prenom && 'Prenom is required',
                email: !email && 'Email is required', 
                message: !message && 'Message is required',
            });
            return;
        }

        setIsSending(true);

        const templateParams = {
            from_name: `${prenom} ${nom}`,
            email: email,
            objetDuMessage: objetDuMessage || 'New message from your website',
            message,
        };

        emailjs
            .send(
                'service_s7gasem',
                'template_tkqtuxx',
                templateParams,
                'bn0yGwf8fLHDkS3gq'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setIsSending(false);
                    setNom('');
                    setPrenom('');
                    setEmail('');
                    setObjetDuMessage('');
                    setMessage('');
                    setErrors({});
                },
                (error) => {
                    console.log(error.text);
                    setIsSending(false);
                    setErrors({ sendError: 'There was an error sending your email. Please try again later.' });
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="objetDuMessage">Objet du Message</label>
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
    
                {isSending && <div style={{ background: '#f0ad4e', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>Envoi en cours...</div>}
                {errors.sendError && <div style={{ background: 'red', padding: '10px', borderRadius: '5px', marginTop: '10px', color: 'white' }}>{errors.sendError}</div>}
                {isSent && <div style={{ background: 'green', padding: '10px', borderRadius: '5px', marginTop: '10px', color: 'white' }}>Votre message a été envoyé. Merci!</div>}
                <div className='contactAdress'>
                    <hr className='contactHr'/>
                    <p className='contactPara'>12 avenue Antoine Dutrievoz 69100 Villeurbanne</p> 
                </div>
                
            </div>
            <Footer/>
        </div>
    );
    
    
    };
export default Contact;
