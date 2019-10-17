import React from 'react';
import { Carousel } from 'antd';

import './style.scss';

export default function Headline() {
  return (
    <section className="pd-headline__v2">
      <Carousel autoplay>
        <div className="item">
          <div className="title">
            <div className="primary">Your</div>
            <div className="secondary">Tech</div>
            <div className="primary">Professional</div>
          </div>
          <div className="description">
            PandaTech is a full service Branding, design, and development studio
            based in the heart of Jakarta.
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="primary">Create</div>
            <div className="secondary">Magnificant</div>
            <div className="primary">Application</div>
          </div>
          <div className="description">
            From website, mobile app, to desktop app based on your need.
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="primary">Also</div>
            <div className="secondary">Tech</div>
            <div className="primary">Consulting</div>
          </div>
          <div className="description">
            We also provide the service for consulting your business from the
            tech side.
          </div>
        </div>
      </Carousel>
    </section>
  );
}
