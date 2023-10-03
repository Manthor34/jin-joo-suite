import React from 'react';
import bgNoodle from '../assets/images/BG_NOODLE.webp';
import yingYang from '../assets/images/YingYang.png';
import fleur from '../assets/images/fleur.png';
import inter from '../assets/images/intertwined.png';
import kanji from '../assets/images/kanji.png';
import fleur2 from '../assets/images/fleur2.png';
import circle from '../assets/images/circle.png';
import dessin from '../assets/images/dessinBibimbap2.png';
import bibimbap from '../assets/images/bibimbapDessinMenuSquare.png';
import Footer from '../components/MainFooter';


function Noodle(){
  return (
    <>
      <div className='noodleText'>
        <h1>BIBIMBAP IS ART</h1>
        <h2>비빔밥은 예술입니다</h2>
        <p className='paraTitre'>Le bibimbap est Une oeuvre d'art culinaire qui marie harmonieusement couleurs, saveurs et<br/>
        textures. Chaque ingrédient est préparé avec soin, offrant un festival visuel et gustatif. Des<br/>
        couleurs vives et des saveurs équilibrées se mêlent dans chaque bouchée, nous<br/>
        transportant dans un voyage culinaire.</p>
        <p className='paraTitre2'>Chaque jour, nous cuisinons nos propres recettes à partir de produits frais.</p>
        <h2 className='h2ko2'>비빔밥</h2>
        <img className='imgBgBbimbap' src={bibimbap} />
        <img className='imgBgBbimbap2' src={bibimbap} />
        <h2 className='h2'>Le bibimbap, un plat qui vous veut du bien</h2>
        <div className='textContainer'>
          <div className='bimPara'>
            <img className='imgPara' src={yingYang} />
            <h3 className='titrePara'>un exemple d’équilibre</h3>
            <p>Le bibimbap a été reconnu par l’OMS comme étant l’un des plats les plus équilibrés. Riz, crudités, protéine, kimchi… chaque ingrédient remplit une fonction pour nous offrir toute l’énergie nécessaire à notre journée.</p>
          </div>
          <div className='bimPara'>
            <img className='imgPara' src={fleur} />
            <h3 className='titrePara'>le kimchi, un super aliment</h3>
            <p>Le kimchi est une recette de choux fermenté typique coréenne, autant reconnu pour ses saveurs que pour ses vertus anti-cancérigènes grâce à ses vitamines, minéraux, fibres et probiotiques…</p>
          </div>
          <div className='bimPara'>
            <img className='imgPara' src={inter} />
            <h3 className='titrePara'>faire le plein d’énergie</h3>
            <p>Le bibimbap est cuisiné avec une base riz qui fournit une énergie durable grâce à ses glucides. Faible en matières grasses et sans gluten, le riz est riche en minéraux et en vitamines B, ce qui en fait une base solide pour une nutrition saine.</p>
          </div>
          <div className='bimPara'>
            <img className='imgPara' src={kanji} />
            <h3 className='titrePara'>le juste apport en protéine</h3>
            <p>L'œuf mollet couplé avec une viande ou du tofu vous offre toutes les protéines nécessaires pour subvenir à votre journée. Les protéines sont fondamentales dans la nutrition car elles aident à la construction des tissus, ainsi que dans la régulation des fonctions corporelles.</p>
          </div>
          <div className='bimPara'>
            <img className='imgPara' src={circle} />
            <h3 className='titrePara'>un boost de vitamines</h3>
            <p>Les crudités sont plus riches en vitamines, notamment en vitamines C, que les légumes cuits. Cela permet de renforcer les défenses immunitaires. Les crudités interviennent également pour le bon fonctionnement du système digestif.</p>
          </div>
          <div className='bimPara'>
            <img className='imgPara' src={fleur2} />
            <h3 className='titrePara'>Un plat spirituel</h3>
            <p>Le bibimbap ne se résume pas à ses valeurs nutritionnelles, c'est également un symbole de spiritualité où chaque ingrédient représente un élément et une partie de notre corps. Ainsi le bibimbap reconnecte notre corps et notre esprit à l'environnement qui nous entoure.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  );
};

export default Noodle; 