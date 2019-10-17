import React from 'react';

import './style.scss';

export default function WhatsappBtn() {
  return (
    <div className="pd-whatsapp-btn__v2">
      <div className="container">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/img/social_media/whatsapp.png`}
            alt="wa"
          />
        </div>
        <div className="text">Whatapp</div>
      </div>
    </div>
  );
}
