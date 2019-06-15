import React, { Component } from 'react';

import { Button, Tabs, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';

class Home extends Component {
  render() {
    return (
      <div className='pd-homepage pd-container'>
        <header>
          <h1><Link to='/'>Panda.</Link></h1>
          <div className='pd-homepage-menu'>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
            <Button type='link' icon='menu'/>
          </div>
          <Tabs>
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
        </header>
        <footer>
          <div className='social-media'>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><Icon type='instagram' style={{ fontSize: '40px', marginRight: '40px' }} /></a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><Icon type='facebook' style={{ fontSize: '40px' }}/></a>
          </div>
          <a href='https://squarespace.com' target='_blank' rel='noopener noreferrer' className='blog'>
            Blog
          </a>
        </footer>
      </div>
    );
  }
}

export default Home;