import React, { useState, useEffect } from 'react';
import fleurLogo from  '../assets/images/fleurLogo.png';
import titreLogo from  '../assets/images/titreLogo.png';
// import bibimbapDessin from  '../assets/images/bibimbapPopup.png';

const Modal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('modalDisplayed') !== 'true') {
      setIsOpen(true);
      sessionStorage.setItem('modalDisplayed', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-bg')) {
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
        <img className='fleurLogo' src={fleurLogo} />
        <img className='titreLogo' src={titreLogo} />
        <div className="modal-text">
          <p>Cher·e·s client·e·s,</p>
          <p>Après un an à vous avoir régalé·e·s avec nos recettes d'instant noodles et
            de bubble teas, <span className='boldPara'>un grand changement se prépare chez JIN JOO.</span></p>
          <p>Bien que notre offre actuelle ait pour objectif d'offrir un premier aperçu des
            saveurs coréennes et d'ailleurs, nous voulons aller plus loin avec <span className='boldPara'>des
            plats qui favorisent davantage les produits frais et faits maison</span> pour
            une cuisine plus authentique, saine et responsable. Dans cette démarche,
            nous avons décidé de nous séparer des nouilles instantanées et des bubble
            teas pour <span className='boldPara'>nous concentrer sur le Bibimbap.</span></p>
          <p>Pour celles et ceux qui ne connaissent pas ce met, c'est <span className='boldPara'>un plat typique
            de la gastronomie coréenne réputée pour son équilibre</span>, ses saveurs, sa
            générosité et ses bienfaits pour la santé. Il sera accompagné de Mandu,
            Kimbap, Bingsu et Hotteok... Des recettes qui ne vous sont peut-être pas
            familières et que nous avons hâte de vous faire découvrir !</p>
          <p>En attendant ce grand changement, nous vous invitons à continuer de
            profiter de nos recettes actuelles avant de laisser leur place à notre
            nouveau menu qui sera effectif fin juin.</p>
          <p>La direction</p>
        </div>
          <button className='buttonModal' onClick={closeModal}>Aller au site</button>
          {/* <img className='bibimDessin' src={bibimbapDessin} /> */}
        </div>
      </div>
      <div className="modal-bg" onClick={handleClickOutside}></div>
    </>
  );
};

export default Modal;