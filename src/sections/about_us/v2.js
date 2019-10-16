import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function AboutUs() {
  return (
    <section id="about" className="pd-about">
      <Row>
        <Col xs={24} lg={24} className="page-title">
          About Us
        </Col>

        <div className="content-wrapper">
          <p>
            We are a team of collaborators, thinkers, designer and creatives who
            share the same passion in product development and technologies. With
            more than 30 years of combined experience in the tech industry, we
            understand your pain points and strive to bring your business to the
            next level.
          </p>
          <p>
            Our team are UC Berkeley, Stanford and Purdue graduates who have
            worked in Silicon Valley, Singapore and China. We take great pride
            in our work and ensure the best result is delivered.
          </p>
        </div>
      </Row>

      <Row>
        <Col xs={24} lg={24} className="page-subtitle">
          Our Promise
        </Col>
        <span>
          We only deliver high quality work. Your satisfaction is at the core of
          our work.
        </span>
      </Row>
    </section>
  );
}
