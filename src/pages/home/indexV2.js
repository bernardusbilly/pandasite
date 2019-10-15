import React, { useState } from "react";
import { Button, Col, Icon, Row, Tabs } from "antd";
import GoogleMapReact from "google-map-react";

import "./style_v2.scss";

function Home() {
  const [products] = useState([
    {
      title: "UI/UX Standards",
      description:
        "88% of customers are less likely to return to a site after a bad experience. Design and experience are foundation to digital success.",
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_design_tools.png`
    },
    {
      title: "Web Design",
      description:
        "There are 4.4 billion people who are using the internet. Make sure your business is there so you are not leaving any money on the table.",
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_wall_post.png`
    },
    {
      title: "Mobile iOS & Android",
      description:
        "In Indonesia, mobile penetration is 91% of the total internet users. Meaning your business could utilize this growth for sure.",
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_mobile_life.png`
    },
    {
      title: "Big Data",
      description:
        "The gold of the 21st century. Excellent data management and analytics will bring your business to the next level.",
      image: `${process.env.PUBLIC_URL}/img/artworks/artwork_data.png`
    }
  ]);

  return (
    <div className="pd-homepage">
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

          <Row id="products" className="pd-products">
            {products.map(product => {
              return (
                <div className="pd-products-item">
                  <img
                    src={product.image}
                    alt={product.title || "Artwork Image"}
                  />
                  <div className="pd-products-item-title">{product.title}</div>
                  <div className="pd-products-item-description">
                    {product.description}
                  </div>
                </div>
              );
            })}
          </Row>

          <Row id="traction" className="pd-traction">
            <div className="header">Past Works</div>
            <div className="pd-traction-wrapper">
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/ubiklan.png`}
                  alt="Ubiklan"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/belipart.png`}
                  alt="Belipart"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/satu-data-indonesia.png`}
                  alt="Satu Data Indonesia"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/kantor-staf-presiden.png`}
                  alt="Kantor Staf Presiden"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/happy5.png`}
                  alt="Happy5"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/societo-generale.png`}
                  alt="Societo Generale"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/kubox.png`}
                  alt="Kubox"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/trader-wave.png`}
                  alt="Trader Wave"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/little-juice.png`}
                  alt="Little Juice"
                />
              </div>
              <div className="pd-traction-wrapper-company">
                <img
                  src={`${process.env.PUBLIC_URL}/img/traction/ban-ban.png`}
                  alt="Ban-Ban"
                />
              </div>
            </div>
          </Row>

          <div id="about" className="pd-about">
            <div className="page-title">About Us</div>
            <div className="content-wrapper">
              <span>
                <p>
                  We are a team of collaborators, thinkers, designer and
                  creatives who share the same passion in product development
                  and technologies. With more than 30 years of combined
                  experience in the tech industry, we understand your pain
                  points and strive to bring your business to the next level.
                </p>
                <p>
                  Our team are UC Berkeley, Stanford and Purdue graduates who
                  have worked in Silicon Valley, Singapore and China. We take
                  great pride in our work and ensure the best result is
                  delivered.
                </p>
              </span>
              <h1>Our Promise</h1>
              <span>
                We only deliver high quality work. Your satisfaction is at the
                core of our work.
              </span>
              <div className="team-wrapper">
                <div>
                  <div className="team-photo">
                    <img
                      alt="Glorio"
                      src={`${process.env.PUBLIC_URL}/img/founders/glorio.jpg`}
                    />
                    <div className="display-name">Glorio Yulianto</div>
                  </div>
                  <div className="team-photo">
                    <img
                      alt="Michael"
                      src={`${process.env.PUBLIC_URL}/img/founders/michael.jpg`}
                    />
                    <div className="display-name">Michael Jagadpramana</div>
                  </div>
                  <div className="team-introduction">
                    <div className="team-introduction-title">Meet The Team</div>
                    <div className="team-introduction-subtitle">
                      Designer, Thinker & Collabrators
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-photo">
                    <img
                      alt="Billy"
                      src={`${process.env.PUBLIC_URL}/img/founders/billy.jpg`}
                    />
                    <div className="display-name">Billy Tjiptoning</div>
                  </div>
                  <div className="team-photo">
                    <img
                      alt="Rico"
                      src={`${process.env.PUBLIC_URL}/img/founders/rico.jpg`}
                    />
                    <div className="display-name">Rico Ardisyah</div>
                  </div>
                  <div className="team-photo">
                    <img
                      alt="Teddy"
                      src={`${process.env.PUBLIC_URL}/img/founders/teddy.jpg`}
                    />
                    <div className="display-name">Teddy The</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="communication"
              src={`${process.env.PUBLIC_URL}/img/Communication.png`}
              alt="Communication"
            />
            <div className="pd-about-footer">
              <div className="title">Let's make something great together</div>
              <div className="subtitle">
                Get in touch with us and send some basic info for a quick quote
              </div>
              <Button href="#contact">Start A Project</Button>
            </div>
          </div>

          <div id="contact" className="pd-contact">
            <form
              action="https://formspree.io/contact@pandatech.io"
              method="POST"
            >
              <h1>Contact Us!</h1>
              <p>
                {" "}
                Sending an email is free, redoing a tech work is not. Take the
                minute to write to us, and let our award winning team reaches
                out to you.
              </p>
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="name" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
              <Button htmlType="submit">Submit</Button>
            </form>
            <div className="sidebar">
              <div className="contact-whatsapp">
                <img
                  src={`${process.env.PUBLIC_URL}/img/WhatsApp_Logo_1.png`}
                  alt="WhatsApp Logo"
                />
                <div>Contact us via WhatsApp!</div>
                <div>+627878788</div>
              </div>
              <a
                className="map-wrapper"
                href="https://www.google.com/maps/place/NEO+SOHO+Podomoro+City+Central+Park/@-6.1748171,106.7894695,18.04z/data=!4m12!1m6!3m5!1s0x0:0xcb9754290990043d!2sRoyal+Mediterania+Garden+Residences,+Tower+Lavender!8m2!3d-6.1764236!4d106.7892746!3m4!1s0x2e69f65ee1c07a31:0x2c4c67f4d94e8e65!8m2!3d-6.1748323!4d106.7899324?hl=en-US"
                target="_blank"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/HeadquarterMap.png`}
                  alt="Map"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-homepage-footer">
        © 2019 Pandatech. All Rights Reserved.
      </div>
    </div>
  );
}

export default Home;
