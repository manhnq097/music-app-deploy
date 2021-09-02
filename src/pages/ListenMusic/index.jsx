import './listenMusic.scss';
import React from 'react'
import PlayingBar from './components/PlayingBar';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailAlbum from './pages/DetailAlbum';
import { useState } from 'react';

const ListenMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState(() => JSON.parse(localStorage.getItem('tracks')) || [0]);
  const [trackIndex, setTrackIndex] = useState(() => JSON.parse(localStorage.getItem('trackIndex')) || 0);
  const [albumString, setAlbumString] = useState(() => localStorage.getItem('albumString') || '');
  const [albumIndex, setAlbumIndex] = useState(() => localStorage.getItem('albumIndex') || '');

  const onClickPlayAll = (tracks, index, albumString, albumIndex) => {
    setTracks(tracks);
    setTrackIndex(index);
    setAlbumString(albumString);
    setAlbumIndex(albumIndex);
    localStorage.setItem('tracks', JSON.stringify(tracks));
    localStorage.setItem('trackIndex', index);
    localStorage.setItem('albumString', albumString);
    localStorage.setItem('albumIndex', albumIndex);
  }

  return (
    <div className="listen-music"  style={{paddingBottom: '150px'}}>
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Home} />

        {/* Website */}
        <Route path="/listen-music/detail-album/:album/:index">
          <DetailAlbum
            onClickPlayAll={onClickPlayAll}
            trackIndex={trackIndex}
            albumString={albumString}
            albumIndex={albumIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </Route>
      </Switch>
      <div className="listen-music-playingbar">
        <PlayingBar
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  )
}

export default ListenMusic