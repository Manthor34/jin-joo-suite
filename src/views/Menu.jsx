import React, { useState, useEffect } from 'react';
import MenuContentBibimbap from '../components/MenuContentBibimbap';
import MenuContentBibimbapParTwo from '../components/MenuContentBibimbapPartTwo';
import MenuContentMandu from '../components/MenuContentMandu';
import MenuContentKimbap from '../components/MenuContentFormules';
import MenuContentEntrees from '../components/MenuContentEntrees';
import MenuContentDesserts from '../components/MenuContentDesserts';
import MenuContentDrinks from '../components/MenuContentDrinks';
import bibimbap from '../assets/images/imgMenuNotResponsive.png';
import mandu from '../assets/images/imgMenuEntrees.png';
import hotteok from '../assets/images/blankDrinks.png';
import Drinks from '../assets/images/blankDrinks.png';
import classNames from 'classnames';

function Menu() {
  const [activeTab, setActiveTab] = useState(1);
  const [leftDivImage, setLeftDivImage] = useState(bibimbap);
  const [isMobile, setIsMobile] = useState(false);

  const handleTabClick = (tabIndex, image) => {
    setActiveTab(tabIndex);
    setLeftDivImage(image);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDrinks = activeTab === 6 && <MenuContentDrinks />;
  const MenuClassNames = classNames({
    DrinksInvert: activeTab === 6,
    NormalContent: activeTab !== 6,
  });

  return (
    <>
        <div className="menuWrapper">
          <div className="left" style={{ backgroundImage: `url(${leftDivImage})` }}>
          </div>
          <div className="right">
          <h1 className='menuTitle'>MENU <span className='menuKoreanTitle'>메뉴</span></h1>
            <div className="menuNav">
              <ul>
                <li>
                  <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabClick(1, bibimbap)}
                  >
                    <span className="englishTextMenuNav">PLATS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">한국면</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 4 ? 'active' : ''}
                    onClick={() => handleTabClick(4, mandu)}
                  >
                    <span className="englishTextMenuNav">ENTRÉES</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">간식</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 5 ? 'active' : ''}
                    onClick={() => handleTabClick(5, hotteok)}
                  >
                    <span className="englishTextMenuNav">DESSERTS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">디저트</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 6 ? 'active' : ''}
                    onClick={() => handleTabClick(6, Drinks)}
                  >
                    <span className="englishTextMenuNav">BOISSONS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">음료</span> */}
                  </button>
                </li>
              </ul>
            </div>
            <div className={`menuContent ${MenuClassNames}`}>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 1), 'inactive-tab': (activeTab !== 1) })}>
                {activeTab === 1 && <MenuContentBibimbap />}
              </div>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 2), 'inactive-tab': (activeTab !== 2) })}>
                {activeTab === 2 && <MenuContentMandu isMobile={isMobile} />}
              </div>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 3), 'inactive-tab': (activeTab !== 3) })}>
                {activeTab === 3 && <MenuContentKimbap />}
              </div>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 4), 'inactive-tab': (activeTab !== 4) })}>
                {activeTab === 4 && <MenuContentEntrees />}
              </div>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 5), 'inactive-tab': (activeTab !== 5) })}>
                {activeTab === 5 && <MenuContentDesserts />}
              </div>
              <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 6), 'inactive-tab': (activeTab !== 6) })}>
                {activeTab === 6 && <MenuContentDrinks />}
              </div>
            </div>
        <div className="RightPartTwo">
          <div className={classNames({ [`active-tab${isMobile ? '-mobile' : '-not-mobile'}`]: (activeTab === 1), 'inactive-tab': (activeTab !== 1) })}>
            {activeTab === 1 && <MenuContentBibimbapParTwo />}
          </div>
        </div>
          </div>
        </div>
    </>
);
}

export default Menu;
