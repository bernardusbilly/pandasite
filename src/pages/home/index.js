import React, { Component } from 'react';
import { Button, Icon, Tabs } from 'antd';
import GoogleMapReact from 'google-map-react';

import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { title: 'UI/UX Standards', description: '88% of customers are less likely to return to a site after a bad experience. Design and experience are foundation to digital success.' },
        { title: 'Web Design', description: 'There are 4.4 billion people who are using the internet. Make sure your business is there so you are not leaving any money on the table.' },
        { title: 'Mobile iOS & Android', description: 'In Indonesia, mobile penetration is 91% of the total internet users. Meaning your business could utilize this growth for sure.' },
        { title: 'Big Data', description: 'The gold of the 21st century. Excellent data management and analytics will bring your business to the next level.' },
      ]
    }
  }
  render() {
    return (
      <div className='pd-homepage'>
        <div className='pd-homepage-main'>
          <div id='home' className='pd-content' style={{ marginLeft: 0 }}>
            <div>We are<br/>revamping<br/>our website</div>
            <p>
              Greater things are yet to come!
            </p>
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