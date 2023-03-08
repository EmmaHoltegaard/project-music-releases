/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist'
import { AlbumTitle } from './AlbumTitle'

export const AlbumCard = () => {
  return (
    <article>
      <h2>Album Card</h2>
      <div className="image-wrapper">
        <img alt="album cover" />
        <div className="icon-wrapper">
          <img alt="icon" />
          <img alt="icon" />
          <img alt="icon" />
        </div>
      </div>
      <AlbumArtist />
      <AlbumTitle />
    </article>
  )
}