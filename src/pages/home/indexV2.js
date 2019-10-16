import React from 'react';
import { Tabs } from 'antd';

import Container from 'components/containers/v2';

import AboutUs from 'sections/about_us/v2';
import Contact from 'sections/contact/v2';
import Header from 'components/headers/v2';
import Footer from 'components/footers/v2';
import MeetTheTeam from 'sections/meet_the_team/v2';
import OurServices from 'sections/our_services/v2';
import PastWorks from 'sections/past_works/v2';
import SocialMediaAddress from 'sections/social_media_address/v2';
import StartProject from 'sections/start_project/v2';

import './style_v2.scss';

function Home() {
  return (
    <div className="pd-homepage">
      <Container>
        <Header />
        <div className="pd-homepage-main">
          <div id="home" className="pd-content">
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
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
