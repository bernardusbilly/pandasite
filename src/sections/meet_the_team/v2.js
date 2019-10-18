import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function MeetTheTeam() {
  return (
    <section id="team" className="team">
      <div className="background">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="page-title">Meet The Team</div>
            <div className="page-subtitle">
              Designer, Thinker & Collabrators
            </div>
          </Col>

          <Col xs={0} md={4}>
            <div className="team-image-container team-image-container--left">
              <img
                alt="Glorio"
                src={`${process.env.PUBLIC_URL}/img/founders/glorio.jpg`}
              />
              <div className="display-name">Glorio Yulianto</div>
            </div>
          </Col>

          <Col xs={0} md={{ offset: 1, span: 4 }}>
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
          <Col xs={0} md={{ offset: 1, span: 4 }}>
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

          <Col xs={0} md={{ offset: 1, span: 4 }}>
            <div className="team-image-container team-image-container--right bottom">
              <img
                alt="Rico"
                src={`${process.env.PUBLIC_URL}/img/founders/rico.jpg`}
              />

              <div className="display-name">Rico Ardisyah</div>
            </div>
          </Col>
          <Col xs={0} md={{ offset: 1, span: 4 }}>
            <div className="team-image-container team-image-container--right bottom">
              <img
                alt="Teddy"
                src={`${process.env.PUBLIC_URL}/img/founders/teddy.jpg`}
              />

              <div className="display-name">Teddy The</div>
            </div>
          </Col>

          <Col xs={12}>
            <div className="wrapper wrapper--left">
              <div className="team-image-container team-image-container--left">
                <img
                  alt="Glorio"
                  src={`${process.env.PUBLIC_URL}/img/founders/glorio.jpg`}
                />
                <div className="display-name">Glorio Yulianto</div>
              </div>

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

              <div className="team-image-container team-image-container--right bottom">
                <img
                  alt="Teddy"
                  src={`${process.env.PUBLIC_URL}/img/founders/teddy.jpg`}
                />

                <div className="display-name">Teddy The</div>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <div className="wrapper wrapper--right">
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

              <div className="team-image-container team-image-container--right bottom">
                <img
                  alt="Rico"
                  src={`${process.env.PUBLIC_URL}/img/founders/rico.jpg`}
                />

                <div className="display-name">Rico Ardisyah</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
