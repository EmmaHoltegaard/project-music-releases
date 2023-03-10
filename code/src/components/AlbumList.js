/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumCard } from 'components/AlbumCard'; // Ask Daniel on thursday why this has to be above the Header

export const AlbumList = (props) => {
  console.log('the album list is here')
  return (
    <div className="album-list-wrapper">
      {props.newReleases.albums.items.map((singleAlbum) => {
        return (
          <AlbumCard key={singleAlbum.id} albumDetails={singleAlbum} />
        )
      })}
    </div>
  );
}