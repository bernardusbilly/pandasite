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
              <Link to='/' className='home-link'><Icon component={PandaSvg} style={{ fontSize: '40px' }}/></Link>
              <a href='https://www.instagram.com/pandatech.io/' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='instagram' style={{ fontSize: '40px' }} /></a>
              <a href='https://www.facebook.com/pandatech.io' className='socmed' target='_blank' rel='noopener noreferrer'><Icon type='facebook' style={{ fontSize: '40px' }}/></a>
              <div className='rotated-name'>
                <Link to='/'>Pandatech</Link>
              </div>
            </div>
          </div>
          <div className='pd-content'>
            <header>
              <Link to='/about'>About</Link>
              <Link to='/services'>Services</Link>
              <Link to='/contact'>Contact</Link>
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
            {/* <footer>
              <div className='social-media'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><Icon type='instagram' style={{ fontSize: '40px', marginRight: '40px' }} /></a>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><Icon type='facebook' style={{ fontSize: '40px' }}/></a>
              </div>
              <a href='https://squarespace.com' target='_blank' rel='noopener noreferrer' className='blog'>
                Blog
              </a>
            </footer> */}
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