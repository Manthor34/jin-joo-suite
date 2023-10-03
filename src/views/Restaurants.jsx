import React from 'react';
import opera from '../assets/images/operaFacade.png';
import ampere from '../assets/images/ampereFacade.png';
import GHD from '../assets/images/GHDFacade.jpg';
import Footer from '../components/MainFooter';

function Restaurants(){

  const handleClickScroll = () => {
    const element = document.getElementById('operaAnchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById('ampereAnchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScroll3 = () => {
    const element = document.getElementById('GHDAnchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className='titreRestaurants'>
      <h1>NOS RESTAURANTS</h1>
      <h2>우리의 레스토랑</h2>
    </div>
    <div className='column'>
      <div className='mapContainer'>
        
        <div className='mapRight'>
          <a onClick={handleClickScroll2}>LYON AMPÈRE</a>
          <a onClick={handleClickScroll}>LYON OPÉRA</a>
          <a onClick={handleClickScroll3}>LYON GHD</a>
          {/* <a onClick={handleClickScroll3}>BELLECOUR</a> */}
        </div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1bWSsyypc08YU_b5bhSnXNMyFfMdV32g&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
      <div className="ampere lieux">
        <div className='blur2'>
        </div>
        <img id='ampere' src={ampere}/>
        <div className='lieuxRight'>
          <div className='lieuxText'>
            <h4 id='ampereAnchor'>JIN JOO AMPÈRE <br/>
            <span className='adress'>59 rue Victor Hugo, 69002 LYON</span></h4>
            <p>Du lundi au vendredi<br/> 
            11h30 - 14h30 / 18h30- 21h30
            </p>
            <p>le samedi<br/> 
            11h30 - 22h
            </p>
            <p>le dimanche<br/> 
            11h30 - 14h30 / 18h30 - 21h30
            </p>
          </div>
          <a className='button buttonGrey' href='https://jinjoo-ampere.zelty-order.fr/restaurants/3854'>CLICK & COLLECT</a>
          <a className='button' href='https://www.ubereats.com/fr/store/jin-joo-%7C-ampere/r1sfwldPUFmdLYad-NY01g?diningMode=DELIVERY&sc=SEARCH_SUGGESTION'>UBER EATS</a>
          <a className='button' href='https://deliveroo.fr/fr/menu/lyon/perrache/wao-lyon-ampere/'>DELIVEROO</a>
          <img className='ampere2' src={ampere}/>
        </div>
      </div>
      <div className="GHD lieux">
        <div className='blur2'>
        </div>
        <img id='GHD' src={GHD}/>
        <div className='lieuxRight'>
          <div className='lieuxText'>
            <h4 id='GHDAnchor'>JIN JOO GRAND HÔTEL DIEU <br/>
            <span className='adress'>15 rue Bellecordière, 69002 LYON </span></h4>
            <p>Du lundi au vendredi<br/> 
            11h30 - 14h30 / 18h30 - 21h30
            </p>
            <p>le samedi et dimanche<br/> 
            11h30 - 22h
            </p>
          </div>
          <a className='button buttonGrey' href='https://jinjoo-GHD.zelty-order.fr/restaurants/3854'>CLICK & COLLECT</a>
          <a className='button' href='https://www.ubereats.com/fr/store/jin-joo-%7C-grand-hotel-dieu/KYkb3ueRW5GHGmw8wQRJWw'>UBER EATS</a>
          <a className='button' href='https://deliveroo.fr/fr/menu/lyon/lyon-bellecour/wao-hotel-dieu'>DELIVEROO</a>
          <img className='GHD2' src={GHD}/>
        </div>
      </div>
      <div className="opera lieux">
        <div className='blur2'>
        </div>
        <img id='opera' src={opera}/>
        <div className='lieuxRight'>
          <div className='lieuxText'>
            <h4 id='operaAnchor'>JIN JOO OPÉRA <br/>
            <span className='adress'>4 rue de la République, 69001 LYON</span></h4>
            <p>Ouverture prochainement</p>
            {/* <p>lundi : <span className='number'>11h - 22h</span><br/>
            mardi : <span className='number'>11h - 22h</span><br/>
            mercredi : <span className='number'>11h - 22h</span><br/>
            jeudi : <span className='number'>11h - 22h</span><br/>
            vendredi : <span className='number'>11h - 23h</span><br/>
            samedi : <span className='number'>11h - 23h</span><br/>
            dimanche : <span className='number'>11h - 22h</span></p> */}
          </div>
          {/* <button>CLICK <span className='number'>&</span> COLLECT</button>
          <button>UBER EATS</button>
          <button>DELIVEROO</button> */}
        <img className='opera2' src={opera}/>
        </div>
      </div>
      
      {/* <div className="bellecour lieux">
        <img id='bellecour' src={bellecour}/>
        <div className='lieuxRight'>
          <div className='lieuxText'>
            <h4>JIN JOO BELLECOUR <span className='adress'>15 rue Bellecordière, 69002 LYON</span></h4>
            <h5></h5>
            <p>lundi : <span className='number'>11h - 22h</span><br/>
            mardi : <span className='number'>11h - 22h</span><br/>
            mercredi : <span className='number'>11h - 22h</span><br/>
            jeudi : <span className='number'>11h - 22h</span><br/>
            vendredi : <span className='number'>11h - 22h30</span><br/>
            samedi : <span className='number'>11h - 22h30</span><br/>
            dimanche : <span className='number'>11h - 22h</span></p>
          </div>
          <a className='button' href='https://www.ubereats.com/fr/store/jin-joo-%7C-grand-hotel-dieu/KYkb3ueRW5GHGmw8wQRJWw'>UBER EATS</a>
        </div>
      </div> */}
    </div>
    <Footer/>
    </>

  );
};

export default Restaurants; 