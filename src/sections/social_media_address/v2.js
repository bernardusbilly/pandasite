import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function SocialMediaAddress() {
  return (
    <section id="social-media-address" className="pd-social-media-address__v2">
      <Row>
        <Col xs={24} lg={12}>
          <Col lg={24}>
            <div className="title">Social Media</div>
          </Col>
          <Col lg={12}>
            <a
              className="social-media"
              href="https://www.instagram.com/pandatech.io/"
              target="_blank"
              rel="noopener noreferrer">
              <div className="img-container">
                <img
                  src={`${process.env.PUBLIC_URL}/img/social_media/instagram.png`}
                  alt="instagram"
                />
              </div>
              <div className="text">pandatech.io</div>
            </a>
          </Col>
          <Col lg={12}>
            <a
              className="social-media"
              href="https://www.facebook.com/pandatech.io"
              target="_blank"
              rel="noopener noreferrer">
              <div className="img-container">
                <img
                  src={`${process.env.PUBLIC_URL}/img/social_media/facebook.png`}
                  alt="facebook"
                />
              </div>
              <div className="text">pandatech.io</div>
            </a>
          </Col>
        </Col>

        <Col xs={24} lg={12}>
          <Col lg={24}>
            <div className="title">Address</div>
          </Col>
          <Col lg={24}>
            <div className="address">
              Cohive Plaza Bank Index
              <br />
              Jl. M.H. Thamrin No.kav.57 Kota Jakarta Pusat
              <br />
              DKI Jakarta 10350
            </div>
          </Col>
        </Col>
      </Row>

      <Row id="map">
        <div className="pd-map">
          <a
            className="map-wrapper"
            href="https://www.google.com/maps/place/NEO+SOHO+Podomoro+City+Central+Park/@-6.1748171,106.7894695,18.04z/data=!4m12!1m6!3m5!1s0x0:0xcb9754290990043d!2sRoyal+Mediterania+Garden+Residences,+Tower+Lavender!8m2!3d-6.1764236!4d106.7892746!3m4!1s0x2e69f65ee1c07a31:0x2c4c67f4d94e8e65!8m2!3d-6.1748323!4d106.7899324?hl=en-US"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/img/map/snazzy-image.png`}
              alt="Map"
            />
          </a>
        </div>
      </Row>
    </section>
  );
}
