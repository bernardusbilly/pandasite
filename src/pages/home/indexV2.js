import React from 'react';
import { Button, Col, Icon, Row, Tabs } from 'antd';

import Container from 'components/containers/v2';

import AboutUs from 'sections/about_us/v2';
import Contact from 'sections/contact/v2';
import MeetTheTeam from 'sections/meet_the_team/v2';
import OurServices from 'sections/our_services/v2';
import PastWorks from 'sections/past_works/v2';
import StartProject from 'sections/start_project/v2';

import GoogleMapReact from 'google-map-react';

import './style_v2.scss';
import SocialMediaAddress from '../../sections/social_media_address/v2';

function Home() {
  return (
    <div className="pd-homepage">
      <Container>
        <div className="pd-homepage-main">
          {/* <div className="pd-sidebar">
          <div className="pd-sidebar-sticky">
            <a href="#home" className="home-link">
              <img
                src={`${process.env.PUBLIC_URL}/img/Panda_Logo.png`}
                alt="panda logo"
              />
            </a>
            <a
              href="https://www.instagram.com/pandatech.io/"
              className="socmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="instagram" style={{ fontSize: "40px" }} />
            </a>
            <a
              href="https://www.facebook.com/pandatech.io"
              className="socmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="facebook" style={{ fontSize: "40px" }} />
            </a>
            <div className="rotated-name">
              <a href="#home">Pandatech</a>
            </div>
          </div>
        </div> */}
          <div id="home" className="pd-content">
            <Row>
              <Col xs={2} lg={2}>
                <div className="header">
                  <div className="logo">
                    <a href="#home" className="home-link">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Panda_Logo.png`}
                        alt="panda logo"
                      />
                    </a>
                  </div>
                  <div>
                    <span>PandaTech</span>
                  </div>
                </div>
              </Col>
              <Col xs={22} lg={22}>
                <header>
                  <a href="#about">About</a>
                  <a href="#products">Services</a>
                  <a href="#contact">Contact</a>
                  <Button type="link" icon="menu" />
                </header>
              </Col>
            </Row>

            <Tabs tabPosition="right">
              <Tabs.TabPane tab="•" key="1" className="tab-1">
                <div>We</div>
                <div>Build</div>
                <div>Identity.</div>
                <p>
                  PandaTech is a full service Branding, design, and development
                  studio based in the heart of Jakarta.
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="•" key="2" className="tab-2">
                <div>Create</div>
                <div>Magnificant</div>
                <div>Application</div>
                <p>
                  From website, mobile app, to desktop app based on your need.
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="•" key="3" className="tab-3">
                <div>Also</div>
                <div>Tech</div>
                <div>Consulting</div>
                <p>
                  We also provide the service for consulting your business from
                  the tech side.
                </p>
              </Tabs.TabPane>
            </Tabs>

            <OurServices />
            <PastWorks />
            <StartProject />
            <AboutUs />
            <MeetTheTeam />
            <Contact />
            <SocialMediaAddress />
          </div>
        </div>
        <div className="pd-homepage-footer">
          © 2019 Pandatech. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
}

export default Home;
