import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function StartProject() {
  return (
    <section id="pd-start-project" className="pd-start-project">
      <Row className="background">
        <Col xs={0} md={12}>
          <div className="text">
            <div className="title">Let's make something great together</div>
            <div className="subtitle">
              Get in touch with us and send some basic info for a quick quote
            </div>
          </div>

          <a href="#contact">
            <div className="button">
              <button>Start a project</button>
            </div>
          </a>
        </Col>
        <Col xs={0} md={{ offset: 3, span: 9 }}>
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/artworks/artwork_conversation.png`}
              alt="conversation"
            />
          </div>
        </Col>

        <Col xs={24} md={0}>
          <div className="text">
            <div className="title">Let's make something great together</div>
            <div className="image-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/artworks/artwork_conversation.png`}
                alt="conversation"
              />
            </div>
            <div className="subtitle">
              Get in touch with us and send some basic info for a quick quote
            </div>
          </div>

          <a href="#contact">
            <div className="button">
              <button>Start a project</button>
            </div>
          </a>
        </Col>
      </Row>
    </section>
  );
}
