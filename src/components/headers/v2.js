import React, { useState } from 'react';
import { Col, Icon, Row } from 'antd';

import MobileMenu from 'components/mobile_menus/v2';

import './style.scss';

export default function Header() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  function showMenu() {
    setMobileMenuVisibility(true);
  }

  function hideMenu() {
    setMobileMenuVisibility(false);
  }

  return (
    <header id="pd-header" className="pd-header pd-header__v2">
      {mobileMenuVisibility && <MobileMenu handleClose={hideMenu} />}
      <Row>
        <Col xs={22} md={23} lg={16}>
          <a href="#home">
            <div className="header__left">
              <div className="logo">
                <img
                  src={`${process.env.PUBLIC_URL}/img/Panda_Logo.png`}
                  alt="panda logo"
                />
              </div>
              <div className="company">PandaTech</div>
            </div>
          </a>
        </Col>

        <Col xs={0} md={0} lg={8}>
          <nav className="header__right">
            <a href="#about">About</a>
            <a href="#products">Services</a>
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
