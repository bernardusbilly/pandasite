import React from 'react';

import './style.scss';

export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="pd-footer__v2">
      © <span>{getCurrentYear()}</span> Pandatech. All Rights Reserved.
    </footer>
  );
}
