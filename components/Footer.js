import React from 'react';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <a
        href="https://discord.gg/d6JHyWpdDe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 bg-gray-700 rounded px-4 py-2 flex items-center space-x-2"
      >
        <span>Join our Discord</span>
        <SiDiscord />
      </a>
    </div>
  );
};

export default Footer;
