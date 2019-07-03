import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { PandaSvg } from '../../panda';

class Home extends Component {
  render() {
    return (
      <div className='pd-homepage'>
        <div className='pd-homepage-main'>
          <div className='pd-sidebar'>
            <div className='pd-sidebar-sticky'>
              <Link to='/' className='home-link'><Icon component={PandaSvg} style={{ fontSize: '40px' }}/></Link>
              <a href='https://www.instagram.com/pandatech.io/' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='instagram' style={{ fontSize: '40px' }} /></a>
              <a href='https://www.facebook.com/pandatech.io' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='facebook' style={{ fontSize: '40px' }}/></a>
              <div className='rotated-name'>
                <Link to='/'>Pandatech</Link>
              </div>
            </div>
          </div>
          <div className='pd-content pd-content-about'>
            <div className='page-title'>About Us</div>
            <div className='content-wrapper'>
              <span>
                Cillum in veniam non excepteur anim excepteur cillum. Dolore sit et irure ullamco esse dolore proident duis veniam id. Anim occaecat pariatur sit irure excepteur eiusmod labore. 
              </span>
              <h1>Our Promise</h1>
              <span>
                Non proident sunt esse laborum. Reprehenderit dolore laboris pariatur laborum ea minim nisi minim labore nisi. 
              </span>
              <div className='team-wrapper'>
                <div>
                  <div className='team-photo'/>
                  <div className='team-photo'/>
                  <div className='team-introduction'>
                    <div className='team-introduction-title'>
                      Meet The Team
                    </div>
                    <div className='team-introduction-subtitle'>
                      Designer, Thinker & Collabrators
                    </div>
                  </div>
                </div>
                <div>
                  <div className='team-photo'/>
                  <div className='team-photo'/>
                  <div className='team-photo'/>
                </div>
              </div>
            </div>
            <div className='pd-content-about-footer'>
              <div className='title'>
                Let's make something great together
              </div>
              <div className='subtitle'>
                Get in touch with us and send some basic info for a quick quote
              </div>
              <Button>Start A Project</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;