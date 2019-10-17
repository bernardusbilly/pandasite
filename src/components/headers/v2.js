import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function Header() {
  return (
    <header className="pd-header pd-header__v2">
      <Row>
        <Col xs={20} lg={5}>
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

        <Col xs={0} lg={19}>
          <nav className="header__right">
            <a href="#about">About</a>
            <a href="#products">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </Col>
      </Row>
    </header>
  );
}
