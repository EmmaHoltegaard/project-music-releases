/* eslint-disable linebreak-style */
import React from 'react';
import heartIcon from '../icons/heart.svg';
import playIcon from '../icons/play.svg';
import dotsIcon from '../icons/dots.svg';

export const Icons = () => {
  return (
    <div className="button-wrapper">
      <img src={heartIcon} alt="dots" width="30px" height="30px" />
      <img src={playIcon} alt="dots" width="30px" height="30px" />
      <img src={dotsIcon} alt="dots" width="30px" height="30px" />
    </div>
  )
}