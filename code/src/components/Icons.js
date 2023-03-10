/* eslint-disable linebreak-style */
import React from 'react';
import heartIcon from '../icons/heart.svg';
import playIcon from '../icons/play.svg';
import dotsIcon from '../icons/dots.svg';

export const Icons = () => {
  return (
    <div className="icon-wrapper">
      <img src={heartIcon} alt="dots" />
      <img className="play-icon" src={playIcon} alt="dots" />
      <img src={dotsIcon} alt="dots" />
    </div>
  )
}
