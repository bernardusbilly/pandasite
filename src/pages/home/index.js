import React, { Component } from 'react';
import { Button, Icon, Tabs } from 'antd';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

import { PandaSvg } from '../../panda';

import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { title: 'UI/UX Standards', description: 'In ipsum qui officia enim labore ut. Ex excepteur esse anim enim. Lorem veniam nulla veniam magna minim laboris ex exercitation et id.' },
        { title: 'Web Design', description: 'In ipsum qui officia enim labore ut. Ex excepteur esse anim enim. Lorem veniam nulla veniam magna minim laboris ex exercitation et id.' },
        { title: 'Mobile iOS & Android', description: 'In ipsum qui officia enim labore ut. Ex excepteur esse anim enim. Lorem veniam nulla veniam magna minim laboris ex exercitation et id.' },
        { title: 'IoT Development', description: 'In ipsum qui officia enim labore ut. Ex excepteur esse anim enim. Lorem veniam nulla veniam magna minim laboris ex exercitation et id.' },
      ]
    }
  }
  render() {
    return (
      <div className='pd-homepage'>
        <div className='pd-homepage-main'>
          <div className='pd-sidebar'>
            <div className='pd-sidebar-sticky'>
              <a href='#home' className='home-link'><Icon component={PandaSvg} style={{ fontSize: '40px' }}/></a>
              <a href='https://www.instagram.com/pandatech.io/' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='instagram' style={{ fontSize: '40px' }} /></a>
              <a href='https://www.facebook.com/pandatech.io' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='facebook' style={{ fontSize: '40px' }}/></a>
              <div className='rotated-name'>
                <a to='#home'>Pandatech</a>
              </div>
            </div>
          </div>
          <div className='pd-content'>
            <header>
              <a href='#about'>About</a>
              <a href='#services'>Services</a>
              <a href='#contact'>Contact</a>
              <Button type='link' icon='menu'/>
            </header>
            <Tabs tabPosition='right'>
              <Tabs.TabPane tab='•' key='1' className='tab-1'>
                <div>We</div>
                <div>Build</div>
                <div>Identity.</div>
                <p>
                  PandaTech is a full service Branding, design, and development studio based in the heart of Jakarta.
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab='•' key='2' className='tab-2'>
                <div>Create</div>
                <div>Magnificant</div>
                <div>Application</div>
                <p>
                  From website, mobile app, to desktop app based on your need.
                </p>
              </Tabs.TabPane>
              <Tabs.TabPane tab='•' key='3' className='tab-3'>
                <div>Also</div>
                <div>Tech</div>
                <div>Consulting</div>
                <p>
                  We also provide the service for consulting your business from the tech side.
                </p>
              </Tabs.TabPane>
            </Tabs>
            <div className='pd-products'>
              { this.state.products.map(product => {
                return (
                  <div className='pd-products-item'>
                    <div className='pd-products-item-title'>
                      { product.title }
                    </div>
                    <div className='pd-products-item-description'>
                      { product.description }
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='pd-contact'>
              <form>
                <h1>
                  Contact Us!
                </h1>
                <div>
                  <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='name' />
                  </div>
                  <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' />
                  </div>
                </div>
                <label htmlFor='message'>Message</label>
                <textarea id='message'/>
                <Button htmlType='submit'>Submit</Button>
              </form>
              <div className='sidebar'>
                <div className='contact-whatsapp'>
                  <img src={`${process.env.PUBLIC_URL}/img/WhatsApp_Logo_1.png`}/>
                  <div>Contact us via WhatsApp!</div>
                  <div>+627878788</div>
                </div>
                <div className='map-wrapper'>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={{ lat: -6.174875, lng: 106.790156 }}
                    defaultZoom={16} >
                  </GoogleMapReact>
                </div>
              </div>
            </div>
            <div id='about' className='pd-about'>
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
              <div className='pd-about-footer'>
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
        <div className='pd-homepage-footer'>
          © 2019 Pandatech. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Home;