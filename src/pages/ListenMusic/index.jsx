import './listenMusic.scss';
import React from 'react'
import PlayingBar from './components/PlayingBar';
import { Switch, Route } from "react-router-dom";
import DetailAlbum from './components/DetailAlbum';
import { useState } from 'react';
import ListAlbum from './components/ListAlbum';
import Container from '@material-ui/core/Container';

const ListenMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [tracks, setTracks] = useState(() => JSON.parse(localStorage.getItem('tracks')) || [0]);
    const [trackIndex, setTrackIndex] = useState(() => JSON.parse(localStorage.getItem('trackIndex')) || 0);
    const [albumString, setAlbumString] = useState(() => localStorage.getItem('albumString') || '');
    const [albumIndex, setAlbumIndex] = useState(() => JSON.parse(localStorage.getItem('albumIndex')) || 0);

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
        <div className="listen-music">
            <Switch>
                {/* Home */}
                <Route exact path="/listen-music">
                    <div className="mtb-24">
                        <Container maxWidth={false}>
                            <div className="section-album">
                                <ListAlbum
                                    title="Nhạc Việt Nam"
                                    album="top100_VN"
                                    isPlaying={isPlaying}
                                    albumString={albumString}
                                    albumIndex={albumIndex}
                                    setIsPlaying={setIsPlaying}
                                    onClickPlayAll={onClickPlayAll}
                                />
                            </div>
                            <div className="section-album">
                                <ListAlbum
                                    title="Nhạc AM"
                                    album="top100_AM"
                                    isPlaying={isPlaying}
                                    albumString={albumString}
                                    albumIndex={albumIndex}
                                    setIsPlaying={setIsPlaying}
                                    onClickPlayAll={onClickPlayAll}
                                />
                            </div>
                            <div className="section-album">
                                <ListAlbum
                                    title="Nhạc Hàn, Việt, Nhật"
                                    album="top100_CA"
                                    isPlaying={isPlaying}
                                    albumString={albumString}
                                    albumIndex={albumIndex}
                                    setIsPlaying={setIsPlaying}
                                    onClickPlayAll={onClickPlayAll}
                                />
                            </div>
                            <div className="section-album">
                                <ListAlbum
                                    title="Nhạc không lời"
                                    album="top100_KL"
                                    isPlaying={isPlaying}
                                    albumString={albumString}
                                    albumIndex={albumIndex}
                                    setIsPlaying={setIsPlaying}
                                    onClickPlayAll={onClickPlayAll}
                                />
                            </div>
                        </Container>
                    </div>

                </Route>
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
                    isPlaying={isPlaying}
                    albumString={albumString}
                    albumIndex={albumIndex}
                    setTrackIndex={setTrackIndex}
                    setIsPlaying={setIsPlaying}
                />
            </div>
        </div>
    )
}

export default ListenMusic