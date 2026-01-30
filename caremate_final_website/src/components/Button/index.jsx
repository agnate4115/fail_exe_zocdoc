import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ btnUrl, btnText, variant, target="_self" }) {
  return (
    <Link to={btnUrl} target={target} className={`cs_btn cs_style_1 ${variant}`}>
      <span>{btnText}</span>
      <i>
        <img src="images/icons/arrow_white.svg" alt="Icon" />
        <img src="images/icons/arrow_white.svg" alt="Icon" />
      </i>
    </Link>
  );
}
