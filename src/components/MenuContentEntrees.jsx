import React from 'react';
import kimbap from '../assets/images/kimbapMobile.png';
import mandu from '../assets/images/manduMobile.png';
import chikin from '../assets/images/chikinMobile.png';

const MenuContentEntrees = () => {
  return (
    <>
      <img className='imgEntree kimbapMenuImg' src={kimbap}/>
      <h2 className='h2Entree'>KIMBAP [VEG] <span className='koreanMenu'>김밥</span></h2>
      <p className='paraEntree'>FUTOMAKIS CORÉENS : rouleaux de riz, crudités et omelette, enroulés dans une feuille d’algue nori<br/>
      Servis avec une <span className='bold'>sauce soja vinaigrée</span> ou <span className='bold'>épicée.</span></p>
      <img className='imgEntree manduMenuImg' src={mandu}/>
      <h2 className='h2Entree'>MANDU <span className='koreanMenu'>만두</span></h2>
      <p className='paraEntree'>GYOZAS FRITS CORÉENS : raviolis à pâte fine farcis à base d’une protéine savoureuse et légumes.<br/>
      Servis avec une <span className='bold'>sauce soja vinaigrée</span> ou <span className='bold'>épicée.</span><br/>
      <span className='bold'>TOFU [VEG] ou POULET</span>
      </p>
      <img className='imgEntree chikinMenuImg' src={chikin}/>
      <h2 className='h2Entree'>CHIKIN POP <span className='koreanMenu'> 치킨</span></h2>
      <p className='paraEntree paraEntreeMargin'>POULET FRIT CORÉEN : pièces de cuisse de poulet, marinés dans une sauce soja, ail et gingembre frais, panés, puis frits.</p>
    </>
  );
};

export default MenuContentEntrees;
