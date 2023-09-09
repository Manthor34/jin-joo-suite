import React from 'react';
import sakura from '../assets/images/fleur.svg';
import piment from '../assets/images/piment.svg';


const MenuContentBibimbapParTwo = () => {
  return (
    <>
    <section className='platsPartTwo'>
        <h2 className='plus'>RECETTES</h2>
        <h2><img className='sakura' src={sakura} alt=''/>BEEF BULGOGI <span className='koreanMenu'>소불고기</span></h2>
        <p>BOEUF MIJOTÉ : émincé de boeuf tendre longuement mariné dans une sauce bulgogi à base de soja caramélisé, sésame, ail, gingembre et oignons, puis cuit à feu vif.
        </p>
        <h2><img className='sakura' src={sakura} alt=''/>CHIKIN POP <span className='koreanMenu'>치킨팝</span> <span className='prix'></span></h2>
        <p>
        POULET FRIT CORÉEN : morceaux de poulet croustillants, marinés dans une sauce soja, ail et gingembre frais, panés, puis frits.
        </p>
        <h2><img className='sakura' src={sakura} alt=''/>PORK SSAMJANG <span className='koreanMenu'>돼지고기</span><img className='piment' src={piment}/><img className='piment' src={piment}/></h2>
        <p>
        PORC MARINÉ : émincé de porc aux oignons, mariné dans une sauce épicée à base de pâte ssamjang, sésame, ail et gingembre, puis cuit à feu vif à la marmite.
        </p>
        <h2>SHRIMP GANJANG <span className='koreanMenu'>새우</span> <span className='prix'></span></h2>
        <p>
            CREVETTES CARAMÉLISÉES : crevettes marinées dans une sauce soja sucrée, ail et échalotes fraîches.
        </p>
        <h2>TOFU JORIM [veg] <span className='koreanMenu'>두부 조림</span><img className='piment' src={piment}/> <span className='prix'></span></h2>
        <p>
            TOFU FRIT : tofu mariné dans un mélange de sauce soja et merin, enrobé d’une pâte légère et croustillante.
        </p>
        <h2>SHITAKE [veg] <span className='koreanMenu'>표고버섯</span></h2>
        <p>
            CHAMPIGNONS SHIITAKE : shiitake cuits dans une sauce soja à l’ail, revenus au wok puis nappés d’un mélange de sauce soja caramélisée et jjanjang.
        </p>
        <hr className='hrMenu'/>
        <h2 className='plus'>PETIT PLUS</h2>
        <div className='plusFlex'>
            <div>
                <h3 className='h3Plus'>BOUILLON 육수</h3>
                <p>accompagnement traditionnel</p>
            </div>
            <div>
                <h3 className='h3Plus'>KIMCHI 김치</h3>
                <p>recette typique de chou fermenté </p>
            </div>
        </div>
        <hr className='hrMenu'/>
        <h2 className='plus'>SAUCES AU CHOIX</h2>
        <div className='sauces'>
            <div className='sauce'>
                <h3 className='h3Plus'>GANJANG</h3>
                <p>sauce soja vinaigré avec ou sans sésame</p>
            </div>
            <div className='sauce'>
                <h3 className='h3Plus pim1'>SSAMJANG <img className='piment' src={piment}/></h3>
                <p>huile de sésame, ail et doenjang</p>
            </div>
            <div className='sauce'>
                <h3 className='h3Plus pim2'>GOCHUJANG <img className='piment' src={piment}/><img className='piment' src={piment}/></h3>
                <p>huile de sésame grillé et pâte de piment</p>
            </div>
        </div>
    </section>

    
    </>
  );
};

export default MenuContentBibimbapParTwo;
