import React from 'react';
import sakura from '../assets/images/fleur.svg';
import piment from '../assets/images/piment.svg';
import dish from '../assets/images/koreanDish2.png';
import bibimbap from '../assets/images/bibimbapDessinMenuSquare.png';


const MenuContentBibimbap = () => {
  return (
    <>
    <section className='platsPartOne'>
        <div className='bap'>
            <div className='bapPara'>
              <img className='bibimbapMenuImg' src={bibimbap}/>
                <h2 className='bimh2'>BIBIMBAP <span className='koreanMenu'>비빔밥</span> </h2>
                <p className='paraBibim'>
                reconnu pour son équilibre où chaque aliment apporte une saveur, une couleur et une texture particulière.
                </p>
                <p className='paraChoix'>base de riz blanc chaud, mélange traditionnel de<br/> légumes marinés, oeuf au plat, recette et sauce au choix</p>
            </div>
            <div className='bapPara'>
            <img className='bibimbapMenuImg2' src={dish}/>
                <h2 className='bimh2'>HONBAP <span className='koreanMenu'>혼밥</span></h2>
                <p className='paraBibim'>
                un repas aussi simple que savoureux avec l’essentiel d’une alimentation saine.
                </p>
                <p className='paraChoix'>base de riz blanc chaud, crudités, oeuf au plat, recette et<br/> sauce au choix</p>
            </div>
        </div>
    </section>
    </>
  );
};

export default MenuContentBibimbap;
