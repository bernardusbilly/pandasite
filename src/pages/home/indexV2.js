import React from 'react';

import Container from 'components/containers/v2';

import AboutUs from 'sections/about_us/v2';
import Contact from 'sections/contact/v2';
import Header from 'components/headers/v2';
import Headline from 'sections/headline/v2';
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
        <Headline />
        <div className="pd-homepage-main">
          <div id="home" className="pd-content">
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
