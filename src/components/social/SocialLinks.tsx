import React from 'react';
import { socialLinks } from '../../constants/socialLinks';
import GoogleReviewButton from './GoogleReviewButton';

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
            aria-label={`Follow us on ${social.name}`}
          >
            {social.icon ? (
              <social.icon size={24} />
            ) : social.imageUrl ? (
              <img
                src={social.imageUrl}
                alt={social.name}
                className="w-6 h-6 object-contain"
              />
            ) : null}
          </a>
        ))}
      </div>
      <GoogleReviewButton />
    </div>
  );
}