import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function Contact() {
  return (
    <section id="contact" className="pd-contact__v2">
      <div className="background">
        <form action="https://formspree.io/contact@pandatech.io" method="POST">
          <Row>
            <Col xs={24} lg={24}>
              <div className="header">Contact Us!</div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} lg={24}>
              <div className="page-subtitle">
                Sending an email is free, redoing a tech work is not. Take the
                minute to write to us, and let our award winning team reaches
                out to you.
              </div>
            </Col>

            <Col xs={24} md={12}>
              <input id="name" type="name" name="name" placeholder="Name" />
            </Col>
            <Col xs={24} md={12}>
              <input
                id="email"
                className="email"
                type="email"
                name="email"
                placeholder="Email"
              />
            </Col>
            <Col xs={24}>
              <textarea
                id="message"
                className="message"
                name="message"
                placeholder="Message"
              />
            </Col>

            <Col xs={24}>
              <button className="btn-submit" htmltype="submit">
                Submit
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
}
