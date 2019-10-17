import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function PastWorks() {
  return (
    <section id="traction" className="pd-traction__v2">
      <Row>
        <Col xs={24} lg={24} className="header">
          Past Works
        </Col>
      </Row>
      <Row gutter={20}>
        <Col xs={8} lg={{ span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/ubiklan.png`}
              alt="Ubiklan"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/belipart.png`}
              alt="Belipart"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/satu-data-indonesia.png`}
              alt="Satu Data Indonesia"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/kantor-staf-presiden.png`}
              alt="Kantor Staf Presiden"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/happy5.png`}
              alt="Happy5"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/societo-generale.png`}
              alt="Societo Generale"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/kubox.png`}
              alt="Kubox"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/trader-wave.png`}
              alt="Trader Wave"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/little-juice.png`}
              alt="Little Juice"
            />
          </div>
        </Col>
        <Col xs={8} lg={{ offset: 1, span: 4 }} className="company">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/traction/ban-ban.png`}
              alt="Ban-Ban"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}
