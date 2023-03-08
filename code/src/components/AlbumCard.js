/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist'

export const AlbumCard = (props) => {
  return (
    <article>
      <div className="image-wrapper">
        <img alt="album cover" />
        <div className="icon-wrapper">
          <img alt="icon" />
          <img alt="icon" />
          <img alt="icon" />
        </div>
      </div>
      <h2 className="album-name">{props.albumDetails.name}</h2>
      <h3 className="artist-name">
        {props.albumDetails.artists.map((artist) => {
          return (
            <AlbumArtist key={artist.id} artistDetails={artist} />
          )
        })}
      </h3>
    </article>
  )
}