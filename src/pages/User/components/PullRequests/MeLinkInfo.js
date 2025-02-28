import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOSTNAME } from '../../../../config';

/**
 * "Me" link info component.
 */
class MeLinkInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  };

  storeUsernameAsMe = () => localStorage.setItem('myGithub', this.props.username);

  render = () => (
    <div className="rounded mx-auto mt-8 overflow-hidden w-5/6 lg:w-1/2 mt-4">
      <button
        className="bg-blue-light text-blue-darker mx-auto mt-2 h-8 border-none pointer rounded-sm px-4 block saveUser"
        onClick={this.storeUsernameAsMe}
        style={buttonStyle}
      >
        This is Me
      </button>
      <p className="text-grey-dark mx-auto text-center my-4">
        In the future, you can find your PRs by visiting{' '}
        <a href={`${HOSTNAME}/me`} className="link text-orange underline-hover saveUser" id="melink">
          {HOSTNAME}
          /me
        </a>{' '}
        on this device.
      </p>
    </div>
  );
}

const buttonStyle = {
  border: '2px solid #12336f'
};

export default MeLinkInfo;
