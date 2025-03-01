import React from 'react';
import { LuUser } from 'react-icons/lu';
const IconWithBorder = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      {/* SVG with border */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          ry="4"
          stroke="currentColor"
        />
      </svg>

      {/* Icon placed over the SVG container */}
      <div style={{ position: 'absolute', top: '3px', left: '2px' }}>
        <LuUser size={15} />
      </div>
    </div>
  );
};

export default IconWithBorder;
