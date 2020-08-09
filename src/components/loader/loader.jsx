import React from 'react';

const Loader = () => {
  return (
    <div
      className="loader"
      style={
        {
          top: `50vh`,
          left: `50vw`,
          position: `absolute`,
          transform: `translateX(-50%)`,
        }
      }
    >
      <svg width="64px" height="64px" viewBox="0 0 128 128" xmlSpace="preserve">
        <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
        <g><circle cx="16" cy="64" r="16" fill="#000000" fillOpacity="1"/><circle cx="16" cy="64" r="14.344" fill="#000000" fillOpacity="1" transform="rotate(45 64 64)"/>
          <circle cx="16" cy="64" r="12.531" fill="#000000" fillOpacity="1" transform="rotate(90 64 64)"/>
          <circle cx="16" cy="64" r="10.75" fill="#000000" fillOpacity="1" transform="rotate(135 64 64)"/>
          <circle cx="16" cy="64" r="10.063" fill="#000000" fillOpacity="1" transform="rotate(180 64 64)"/>
          <circle cx="16" cy="64" r="8.063" fill="#000000" fillOpacity="1" transform="rotate(225 64 64)"/>
          <circle cx="16" cy="64" r="6.438" fill="#000000" fillOpacity="1" transform="rotate(270 64 64)"/>
          <circle cx="16" cy="64" r="5.375" fill="#000000" fillOpacity="1" transform="rotate(315 64 64)"/>
          <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>

    </div>);
};

export default Loader;
