import React from 'react';
import { Carousel } from 'antd';

import './style.scss';

export default function Headline() {
  return (
    <section className="pd-headline__v2">
      <Carousel autoplay>
        <div className="item">
          <div className="primary">Your</div>
          <div className="secondary">Tech</div>
          <div className="primary">Professional</div>
          <p className="description">
            PandaTech is a full service Branding, design, and development studio
            based in the heart of Jakarta.
          </p>
        </div>
        <div className="item">
          <div className="primary">Create</div>
          <div className="secondary">Magnificant</div>
          <div className="primary">Application</div>
          <p className="description">
            From website, mobile app, to desktop app based on your need.
          </p>
        </div>
        <div className="item">
          <div className="primary">Also</div>
          <div className="secondary">Tech</div>
          <div className="primary">Consulting</div>
          <p className="description">
            We also provide the service for consulting your business from the
            tech side.
          </p>
        </div>
      </Carousel>
    </section>
  );
}
