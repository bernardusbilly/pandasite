import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function WhatsappBtn() {
  return (
    <a
      href="https://wa.me/628179130988"
      rel="noopener noreferrer"
      target="_blank">
      <div className="pd-whatsapp-btn__v2">
        <Row>
          <div className="pd-whatsapp-container">
            <Col xs={24} md={6} className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/img/social_media/whatsapp.png`}
                alt="wa"
              />
            </Col>
            <Col xs={0} md={{ offset: 4, span: 14 }} className="text">
              Whatapp
            </Col>
          </div>
        </Row>
      </div>
    </a>
  );
}
