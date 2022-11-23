import React from 'react';

import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="github"
            href={socialMedia.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon size="3x" icon={faWhatsappSquare} />
          </a>
          <a
            aria-label="linkedin"
            href={socialMedia.email}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon size="3x" icon={faEnvelope} />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Tnmht
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
