import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function Contact() {
  return (
    <section>
      <div id="contact" className="pd-contact__v2">
        <form action="https://formspree.io/contact@pandatech.io" method="POST">
          <Row>
            <Col xs={24} lg={24}>
              <div className="page-title">Contact Us!</div>
            </Col>
          </Row>

          <Row>
            <Col xs={24} lg={24}>
              <div className="page-subtitle">
                Sending an email is free, redoing a tech work is not. Take the
                minute to write to us, and let our award winning team reaches
                out to you.
              </div>
            </Col>
          </Row>

          <div>
            <div>
              <input id="name" type="name" name="name" placeholder="Name" />
            </div>
            <div>
              <input id="email" type="email" name="email" placeholder="Email" />
            </div>
          </div>
          <textarea id="message" name="message" placeholder="Message" />
          <button className="btn-submit" htmlType="submit">
            Submit
          </button>
        </form>
        {/* <div className="sidebar">
              <div className="contact-whatsapp">
                <img
                  src={`${process.env.PUBLIC_URL}/img/WhatsApp_Logo_1.png`}
                  alt="WhatsApp Logo"
                />
                <div>Contact us via WhatsApp!</div>
                <div>+627878788</div>
              </div>
              <a
                className="map-wrapper"
                href="https://www.google.com/maps/place/NEO+SOHO+Podomoro+City+Central+Park/@-6.1748171,106.7894695,18.04z/data=!4m12!1m6!3m5!1s0x0:0xcb9754290990043d!2sRoyal+Mediterania+Garden+Residences,+Tower+Lavender!8m2!3d-6.1764236!4d106.7892746!3m4!1s0x2e69f65ee1c07a31:0x2c4c67f4d94e8e65!8m2!3d-6.1748323!4d106.7899324?hl=en-US"
                target="_blank"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/HeadquarterMap.png`}
                  alt="Map"
                />
              </a>
            </div> */}
      </div>
    </section>
  );
}
