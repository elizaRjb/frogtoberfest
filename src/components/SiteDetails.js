import React from 'react';

const checklistItems = [
  'Create 10 pull requests (PRs) between Oct 1-31.',
  'PRs can be made to any public repository on GitHub.',
  'PRs should not be labeled as `invalid`.',
  'At least 4 PRs should be in repositories not owned by you.'
];

/**
 * Component to show details about Frogtoberfest in the homepage.
 */
const SiteDetails = () => (
  <div className="rounded mx-auto shadow w-3/4 sm:w-1/2 lg:w-1/3">
    <div className="px-6 py-4">
      <div className="font-bold mb-4">
        <p className="text-lg mb-1">
          Frogtoberfest, inspired from Hacktoberfest is a month-long open source contribution challenge for
          Leapfroggers.
        </p>
      </div>
      {checklistItems.map((item, index) => (
        <li className="flex items-center mb-2" key={index}>
          <div className="rounded-full fill-current text-green">
            <svg
              className="w-6 h-6 align-middle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <span className="text-gray-700 text-m ml-2">{item}</span>
        </li>
      ))}
    </div>
  </div>
);

export default SiteDetails;
