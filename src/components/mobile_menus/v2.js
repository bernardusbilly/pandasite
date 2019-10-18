import React from 'react';
import { Col, Icon, Row } from 'antd';

import './style.scss';

export default function MobileMenus(props) {
  const { handleClose } = props;

  return (
    <nav className="pd-mobile-menu">
      <Row className="header">
        <Col xs={23} sm={23} className="title">
          Menu
        </Col>
        <Col xs={1} sm={1} className="side-btn" onClick={handleClose}>
          <Icon type="close" />
        </Col>
      </Row>
      <Row>
        <ul className="menu-list">
          <li onClick={handleClose}>
            <a href="#products">Service</a>
          </li>
          <li onClick={handleClose}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleClose}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Row>
    </nav>
  );
}
