/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Ressourcebar.css';

const ImageWithTooltip = ({ src, alt }) => {
  const [tooltip, setTooltip] = useState({ display: 'none', top: 0, left: 0, text: '' });

  const handleMouseEnter = (e) => {
    const altText = e.target.alt;
    setTooltip({
      display: 'block',
      top: e.clientY,
      left: e.clientX,
      text: altText
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ display: 'none', top: 0, left: 0, text: '' });
  };

  const handleMouseMove = (e) => {
    setTooltip((prevTooltip) => ({
      ...prevTooltip,
      top: e.clientY,
      left: e.clientX
    }));
  };

  return (
    <div className="img-container">
      <img
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <div
        className="tooltip"
        style={{ display: tooltip.display, top: tooltip.top, left: tooltip.left }}
      >
        {tooltip.text}
      </div>
    </div>
  );
};

export default ImageWithTooltip;
