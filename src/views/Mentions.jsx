import React from 'react';
import '../Styles/Mentions.css';
import Footer from '../components/MainFooter';

function Mentions() {
    return (
        <>
            <div className='bgMentions'>
                <h1 className='mentionsTitle'>MENTIONS LEGALES</h1>
                {/* <hr className='mentionsHr'/> */}
                <h2 className='mentionsH2'>La société</h2>
                <p className='mentionsPara'>Site édité et réalisé par Freelancelot <br />
                    Le site internet www.jin-joo.fr est exploité par la société WOKO Holding, 
                    domiciliée au 12 avenue Antoine Dutrievoz 69100 Villeurbanne, 
                    immatriculée au registre du commerce et des sociétés de Lyon sous le numéro 482 733 474, 
                    représentée Minh-Duc TRUONG en sa qualité de président. <br />
                    Responsable de publication : Minh-Duc TRUONG - Président <br />
                    Hébergeur : 
                </p>
                <h2 className='mentionsH2'>Contenu du site</h2>
                <p className='mentionsPara'>Le site www.jin-joo.fr est la propriété de la société WOKO Holding. <br />
                    Les services présentés sur ce site sont destinés à être utilisés selon les conditions 
                    contractuelles et les tarifs en vigueur. <br />
                    WOKO Holding se réserve le droit de modifier à tout moment, sans préavis, le contenu du site.
                </p>
                <h2 className='mentionsH2'>Droits d’auteur et reproduction</h2>
                <p className='mentionsPara'>L’ensemble de ce site relève de la législation française et internationale
                    sur le droit d’auteur et la propriété intellectuelle. <br />
                    Toute reproduction totale ou partielle de ce site est strictement interdite 
                    sans autorisation expresse et préalable de la société WOKO Holding (article L335-2 
                    du Code de la Propriété Intellectuelle). L’accès à notre site vous confère un droit 
                    d’usage privé et non exclusif de ce site. <br />
                    Les logos, visuels et marques présents sur ce site sont la propriété de leur détenteur respectif.
                </p>
                <h2 className='mentionsH2'>Liens hypertexte</h2>
                <p className='mentionsPara'>Toute création de liens hypertexte pointant vers le site www.jin-joo.fr est libre. <br />
                    L’existence d’un lien hypertexte du site www.jin-joo.fr vers un autre site ne constitue pas une 
                    validation de ce site ou de son contenu, la société WOKO Holding et ses filiales ne peut exercer de 
                    contrôle sur le contenu de ces sites et sa responsabilité ne saurait être engagée quant aux informations,
                    opinions et recommandations formulées par ces tiers.
                </p>
            </div>
            <Footer/>
        </>
    );
}

export default Mentions;