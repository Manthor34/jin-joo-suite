import React from 'react';
import mochi from '../assets/images/mochiMobile.png';
import tiramisu from '../assets/images/tiramisuMobile.png';
import hotteok from '../assets/images/hotteokMobile.png';

const MenuContentDesserts = () => {
    
  return (
    <>
      {/* <img className='imgEntree mochiMenuImg' src={mochi}/> */}
      <h2 className='h2Entree'>PAT MATCHA <span className='koreanMenu'>말차</span></h2>
      <p className='paraEntree'>THÉ VERT : bingsu traditionnel, crème au thé vert matcha, pâte d'haricot rouge.</p>
      {/* <img className='imgEntree tiramisuMenuImg' src={tiramisu}/> */}
      <h2 className='h2Entree'>VERY BERRY <span className='koreanMenu'>레드베리</span></h2>
      <p className='paraEntree'>FRUITS ROUGES : purée de fruits rouges, mélange de fraise, framboise et myrtille.</p>
      <h2 className='h2Entree'>YUZU GINGER <span className='koreanMenu'>유자 생강</span></h2>
      <p className='paraEntree'>YUZU GINGEMBRE : purée de yuzu (citron asiatique), morceaux de gingembre confit.</p>
      <h2 className='h2Entree'>LICHEE <span className='koreanMenu'>리치</span></h2>
      <p className='paraEntree'>LITCHI : purée litchi aux saveurs douces et fleuries, litchi.</p>
      <h2 className='h2Entree'>MANGO <span className='koreanMenu'>망고</span></h2>
      <p className='paraEntree'>MANGUE : purée de mangue, morceaux de mangue fraiche.</p>
      {/* <img className='imgEntree hotteokMenuImg' src={hotteok}/> */}
      <h2 className='h2Entree'>DARK CHOCOLAT <span className='koreanMenu'>다크 초콜릿</span></h2>
      <p className='paraEntree paraEntreeMargin'>CHOCOLAT NOIR : sauce au chocolat noir, éclats de Daim.</p>
    </>
  );
};

export default MenuContentDesserts;
