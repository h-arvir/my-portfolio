'use client';

import './CursorFollower.css';

export default function CursorFollower({ mousePosition, activeSection }) {
  return (
    <div 
      className="cursor-follower"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        transform: `scale(${activeSection === 'hero' ? 1.5 : 1})`
      }}
    />
  );
}