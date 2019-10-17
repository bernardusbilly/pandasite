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
      </div>
    </section>
  );
}
