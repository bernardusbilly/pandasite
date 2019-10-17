import React from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function StartProject() {
  return (
    <section id="pd-start-project" className="pd-start-project">
      <Row className="background">
        <Col xs={18} lg={12}>
          <div className="text">
            <div className="title">Let's make something great together</div>
            <div className="subtitle">
              Get in touch with us and send some basic info for a quick quote
            </div>
          </div>

          <div className="button">
            <button>Start a project</button>
          </div>
        </Col>
        <Col xs={4} lg={{ offset: 3, span: 9 }}>
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/artworks/artwork_conversation.png`}
              alt="conversation"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}
