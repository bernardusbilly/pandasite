import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function MeetTheTeam() {
  return (
    <section id="team" className="team">
      <div className="background">
        <Row>
          <Col xs={24} lg={24}>
            <div className="page-title">Meet The Team</div>
            <div className="page-subtitle">
              Designer, Thinker & Collabrators
            </div>
          </Col>

          <Col xs={12} lg={12}>
            <div className="team-image-container team-image-container--left">
              <img
                alt="Glorio"
                src={`${process.env.PUBLIC_URL}/img/founders/glorio.jpg`}
              />
              <div className="display-name">Glorio Yulianto</div>
            </div>
          </Col>

          <Col xs={12} lg={12}>
            <Col lg={12}>
              <div className="team-image-container team-image-container--right">
                <img
                  alt="Michael"
                  src={`${process.env.PUBLIC_URL}/img/founders/michael.jpg`}
                />
                <div className="display-name">
                  <div>Michael</div>
                  <div>Jagadpramana</div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="team-image-container team-image-container--right">
                <img
                  alt="Billy"
                  src={`${process.env.PUBLIC_URL}/img/founders/billy.jpg`}
                />
                                
                <div className="display-name">
                  <div>Billy</div>
                  <div>Tjiptoning</div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="team-image-container team-image-container--right bottom">
                <img
                  alt="Rico"
                  src={`${process.env.PUBLIC_URL}/img/founders/rico.jpg`}
                />

                <div className="display-name">Rico Ardisyah</div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="team-image-container team-image-container--right bottom">
                <img
                  alt="Teddy"
                  src={`${process.env.PUBLIC_URL}/img/founders/teddy.jpg`}
                />

                <div className="display-name">Teddy The</div>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  );
}
