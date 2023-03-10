/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist';
import { Icons } from './Icons';

export const AlbumCard = (props) => {
  return (
    <article>
      <div className="image-wrapper">
        <a target="_blank" href={props.albumDetails.external_urls.spotify} rel="noreferrer"><img className="album-cover" src={props.albumDetails.images[1].url} alt="album cover" /></a>
        <Icons />
      </div>
      <a target="_blank" href={props.albumDetails.external_urls.spotify} rel="noreferrer">
        <h2 className="album-name">{props.albumDetails.name}
        </h2>
      </a>
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