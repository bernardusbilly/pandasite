import React, { useState } from 'react';
import { Col, Row } from 'antd';

import './style.scss';

function arrowUp() {
  return (
    <svg
      width="12px"
      height="8px"
      viewBox="0 0 12 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Website-Mobile-View-1"
          transform="translate(-272.000000, -405.000000)"
          fill="#333333">
          <g id="Our-Service" transform="translate(20.000000, 352.000000)">
            <g id="UI/UX" transform="translate(0.000000, 46.000000)">
              <g
                id="ic_expand_more_24px"
                transform="translate(258.000000, 11.000000) scale(1, -1) translate(-258.000000, -11.000000) translate(252.000000, 7.000000)">
                <polygon
                  id="Path"
                  points="10.59 0.59 6 5.17 1.41 0.59 0 2 6 8 12 2"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function arrowDown() {
  return (
    <svg
      width="12px"
      height="8px"
      viewBox="0 0 12 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Website-Mobile-View-1"
          transform="translate(-272.000000, -636.000000)"
          fill="#333333">
          <g id="Our-Service" transform="translate(20.000000, 352.000000)">
            <g id="Web-Design" transform="translate(0.000000, 277.000000)">
              <g
                id="ic_expand_more_24px"
                transform="translate(252.000000, 7.000000)">
                <polygon
                  id="Path"
                  points="10.59 0.59 6 5.17 1.41 0.59 0 2 6 8 12 2"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function OurServices() {
  const [products, setProducts] = useState([
    {
      title: 'UI/UX Standards',
      description:
        '88% of customers are less likely to return to a site after a bad experience. Design and experience are foundation to digital success.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_design_tools.png`,
      shown: false,
    },
    {
      title: 'Web Design',
      description:
        'There are 4.4 billion people who are using the internet. Make sure your business is there so you are not leaving any money on the table.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_wall_post.png`,
      shown: false,
    },
    {
      title: 'Mobile iOS & Android',
      description:
        'In Indonesia, mobile penetration is 91% of the total internet users. Meaning your business could utilize this growth for sure.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_mobile_life.png`,
      shown: false,
    },
    {
      title: 'Big Data',
      description:
        'The gold of the 21st century. Excellent data management and analytics will bring your business to the next level.',
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_data.png`,
      shown: false,
    },
  ]);

  function toggleShown(index) {
    let temp = products.slice();

    temp[index].shown = !temp[index].shown;

    setProducts(temp);
  }

  return (
    <section id="products" className="pd-products__v2">
      <Row>
        <Col xs={24} lg={24} className="header">
          Our Service
        </Col>
      </Row>
      <Row gutter={16}>
        {products &&
          products.map((product, index) => (
            <React.Fragment key={index}>
              <Col xs={0} md={0} lg={6}>
                <div className="pd-products__v2-item">
                  <div className="img-container">
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

              <Col xs={24} md={24} lg={0}>
                <div className="pd-products__v2-item">
                  <div className="dropdown" onClick={() => toggleShown(index)}>
                    <div className="title">{product.title}</div>
                    <div className="arrow">
                      {product.shown ? arrowUp() : arrowDown()}
                    </div>
                  </div>
                  {product.shown && (
                    <>
                      <div className="img-container">
                        <img
                          src={product.image}
                          alt={product.title || 'Artwork Image'}
                        />
                      </div>
                      <div className="pd-products__v2-item__text">
                        <div className="description">{product.description}</div>
                      </div>
                    </>
                  )}
                </div>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </section>
  );
}
