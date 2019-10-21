import React, { useEffect, useState } from 'react';
import { Col, Icon, Row } from 'antd';

import MobileMenu from 'components/mobile_menus/v2';

import './style.scss';

export default function Header() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [boxShadowActive, setBoxShadowActive] = useState(false);

  function showMenu() {
    setMobileMenuVisibility(true);
  }

  function hideMenu() {
    setMobileMenuVisibility(false);
  }

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  }

  useEffect(() => {
    if (scrollPosition <= 0) {
      setBoxShadowActive(false);
    } else {
      setBoxShadowActive(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <header
      id="pd-header"
      className={`pd-header pd-header__v2 ${
        boxShadowActive ? 'box-shadow-active' : ''
      } `}>
      {mobileMenuVisibility && <MobileMenu handleClose={hideMenu} />}
      <Row>
        <Col xs={22} md={23} lg={8}>
          <a href="#home">
            <div className="header__left">
              <div className="logo">
                <img
                  src={`${process.env.PUBLIC_URL}/img/Panda_Logo.png`}
                  alt="panda logo"
                />
              </div>
              <div className="company">Pandatech</div>
            </div>
          </a>
        </Col>

        <Col xs={0} md={0} lg={16}>
          <nav className="header__right">
            <a href="#products">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </Col>

        <Col xs={2} md={1} lg={0}>
          <Icon className="icon-menu" type="menu" onClick={showMenu} />
        </Col>
      </Row>
    </header>
  );
}
