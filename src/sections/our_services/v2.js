import React, { useState } from 'react';
import { Col, Row } from 'antd';

import './style.scss';

export default function OurServices() {
  const [products] = useState([
    {
      title: 'UI/UX Standards',
      description:
        '88% of customers are less likely to return to a site after a bad experience. Design and experience are foundation to digital success.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_design_tools.png`,
    },
    {
      title: 'Web Design',
      description:
        'There are 4.4 billion people who are using the internet. Make sure your business is there so you are not leaving any money on the table.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_wall_post.png`,
    },
    {
      title: 'Mobile iOS & Android',
      description:
        'In Indonesia, mobile penetration is 91% of the total internet users. Meaning your business could utilize this growth for sure.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_mobile_life.png`,
    },
    {
      title: 'Big Data',
      description:
        'The gold of the 21st century. Excellent data management and analytics will bring your business to the next level.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_data.png`,
    },
  ]);

  return (
    <section id="products" className="pd-products__v2">
      <Row>
        <Col xs={24} lg={24} className="header">
          Our Service
        </Col>
      </Row>
      <Row gutter={16}>
        {products &&
          products.map((product) => (
            <Col xs={24} lg={6}>
              <div className="pd-products__v2-item">
                <div>
                  <img
                    src={product.image}
                    alt={product.title || 'Artwork Image'}
                  />
                </div>
                <div className="pd-products__v2-item__text">
                  <div className="title">{product.title}</div>
                  <div className="description">{product.description}</div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </section>
  );
}
