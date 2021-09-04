import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef, useEffect } from 'react';
import waveGifWhite from '../../../libs/images/waves-audio-white.gif'

const useStyles = makeStyles({
    playingBar: {
        backgroundColor: 'var(--background-section)',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        borderTop: '1px solid #CCCCCC'
    },
    song: {
        display: 'flex',
        flexBasis: '33.33%',
        alignItems: 'center',
        position: 'relative',
        marginTop: '-20px',
        paddingTop: '20px',
        '&:hover $playingBarListTrack': {
            display: 'block'
        }
    },
    songLeft: {
        width: '56px',
        height: '56px',
        minWidth: '56px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid rgba(0,0,0,0.2)',
        animation: '$rotate 5s linear infinite',
        animationPlayState: props => props.isPlaying ? 'running' : 'paused'
    },
    '@keyframes rotate': {
        "0%": {
            transform: "rotate(0)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    },
    songRight: {
        marginLeft: '10px'
    },
    songTitle: {
        fontSize: '14px',
        marginBottom: '2px',
        fontFamily: 'GoogleSans-Bold',
    },
    songSinger: {
        fontSize: '12px'
    },
    controls: {
        flexBasis: '67.677%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controlsTop: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    control: {
        margin: '0 5px',
        position: 'relative'
    },
    controlBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        margin: '0 5px',
        transition: 'transform 200ms ease-in-out',
        color: 'var(--color-text)',
        '&:hover': {
            color: 'var(--color-primary)'
        },
        '&.active': {
            color: 'var(--color-primary)'
        }
    },
    controlMain: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        border: 'none',
        margin: '0 10px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        color: '#FFFFFF',
        transition: 'transform 200ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    progress: {
        WebkitAppearance: 'none',
        margin: '0 20px',
        height: '5px',
        borderRadius: '6px',
        '&::-webkit-slider-thumb': {
            WebkitAppearance: 'none',
            width: '12px',
            height: '12px',
            background: 'var(--color-primary)',
            borderRadius: '50%',
        },
    },
    controlsBottom: {
        display: 'flex',
        alignItems: 'center',
        '&>span': {
            fontSize: '12px',
            color: '#B3B3B3'
        }
    },
    playingBarActions: {
        flexBasis: '33.33%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    volume: {
        WebkitAppearance: 'none',
        marginLeft: '10px',
        borderRadius: '6px',
        height: '5px',
        '&::-webkit-slider-thumb': {
            WebkitAppearance: 'none',
            width: '0',
            height: '0',
            background: '#FFFFFF',
            borderRadius: '50%',
        },
    },
    songImage: {
        marginRight: '10px',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    songName: {
        fontFamily: 'GoogleSans-Bold'
    },
    playingBarListTrack: {
        display: 'none',
        position: 'absolute',
        bottom: 'calc(100%)',
        left: '0',
        backgroundColor: 'var(--background-section)',
        borderRadius: '6px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)',
        width: '300px',
        fontSize: '12px',
        maxHeight: '400px',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&.active': {
            display: 'block'
        },
        '& table': {
            width: '100%'
        },
        '& table td, & table th': {
            verticalAlign: 'middle'
        },
        '& table thead tr': {
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--background-section)'
        },
        '& table thead tr th': {
            padding: '10px 5px'
        },
        '& table tbody tr': {
            '&.playing': {
                color: '#FFFFFF',
                backgroundColor: 'var(--color-primary)',
            },
            '&:hover': {
                color: '#FFFFFF',
                backgroundColor: 'var(--color-primary)',
                '& $playingBarListTrackSongIndex': {
                    display: 'none'
                },
                '& $playingBarListTrackSongStatus': {
                    display: 'block'
                }
            }
        },
        '& table tbody tr td': {
            padding: '5px'
        }
    },
    playingBarListTrackSongTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    playingBarListTrackSongRight: {
        marginLeft: '5px',
    },
    playingBarListTrackSongImage: {
        width: '36px',
        height: '36px',
        minWidth: '36px',
        '& >img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    },
    playingBarListTrackSongName: {
        fontFamily: 'GoogleSans-Bold',
    },
    playingBarListTrackSongIndex: {
        display: 'block'
    },
    playingBarListTrackSongStatus: {
        display: 'none'
    },
    playingBarListTrackSongButton: {
        background: 'none',
        border: 'none',
        color: '#FFFFFF'
    }
})

const PlayingBar = (props) => {
    const { isPlaying, setIsPlaying } = props;
    const { tracks, trackIndex, setTrackIndex, albumString, albumIndex } = props;
    const classes = useStyles(props);
    const [trackProgress, setTrackProgress] = useState(0);
    const [volumeProgress] = useState(1);
    const [isRepeat, setIsRepeat] = useState(false)

    if (tracks) {
        var { title, creator, avatar, music } = tracks[trackIndex];
    }

    const audioRef = useRef(new Audio(music));

    const { duration } = audioRef.current;

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, var(--color-primary)), color-stop(${currentPercentage}, rgba(0,0,0,0.1)))`;
    const volumeStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volumeProgress}, var(--color-primary)), color-stop(${volumeProgress}, rgba(0,0,0,0.1)))`;

    const intervalRef = useRef();
    const isReady = useRef(false);

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        startTimer();
    };

    const toPrevTrack = () => {
        if (trackIndex === 0) {
            if (isRepeat) {
                setTrackIndex(tracks.length - 1);
            }
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            if (isRepeat) {
                setTrackIndex(0);
            }
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(music);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex, albumString, albumIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className={classes.playingBar}>
            <div className={classes.song}>
                {tracks != 0 ? (
                    <>
                        <div className={classes.songLeft}>
                            <img className={classes.songImage} src={avatar} alt="" />
                        </div>
                        <div className={classes.songRight}>
                            <div className={classes.songTitle}>{title ? title : '-----'}</div>
                            <div className={classes.songSinger}>{creator ? creator : '-----'}</div>
                        </div>
                        <div className={classes.playingBarListTrack}>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th >#</th>
                                            <th className="text-left">Tiêu đề</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tracks.map((track, index) => {
                                            return (
                                                <tr key={index} className={trackIndex === index ? 'playing' : ''}>
                                                    <td className="text-center">
                                                        {trackIndex === index ? (
                                                            isPlaying ? (
                                                                <>
                                                                    <div className={classes.playingBarListTrackSongIndex}>
                                                                        <img width="16px" height="16px" src={waveGifWhite} />
                                                                    </div>
                                                                    <div className={classes.playingBarListTrackSongStatus}>
                                                                        <button
                                                                            className={classes.playingBarListTrackSongButton}
                                                                            onClick={() => setIsPlaying(false)}
                                                                        >
                                                                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" className=""></path></svg>
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className={classes.playingBarListTrackSongIndex}>{index + 1}</div>
                                                                    <div className={classes.playingBarListTrackSongStatus}>
                                                                        <button
                                                                            className={classes.playingBarListTrackSongButton}
                                                                            onClick={() => setIsPlaying(true)}
                                                                        >
                                                                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            )
                                                        ) : (
                                                            <>
                                                                <div className={classes.playingBarListTrackSongIndex}>{index + 1}</div>
                                                                <div className={classes.playingBarListTrackSongStatus}>
                                                                    <button
                                                                        className={classes.playingBarListTrackSongButton}
                                                                        onClick={() => setTrackIndex(index)}
                                                                    >
                                                                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className={classes.playingBarListTrackSongTitle}>
                                                            {track.avatar ? (
                                                                <div className={classes.playingBarListTrackSongImage}>
                                                                    <img src={track.avatar ? track.avatar : ''} />
                                                                </div>
                                                            ) : ''}
                                                            <div className={classes.playingBarListTrackSongRight}>
                                                                <div className={classes.playingBarListTrackSongName}>{track.title}</div>
                                                                <div>{track.creator}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
            <div className={classes.controls}>
                <div className={classes.controlsTop}>
                    <div className={classes.control}>
                        <button
                            className={classes.controlBtn}
                            title="Phát ngẫu nhiên: tắt"
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="random" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-random fa-w-16 fa-3x"><path fill="currentColor" d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z" className=""></path></svg>
                        </button>
                    </div>
                    <div className={classes.control}>
                        <button
                            className={classes.controlBtn}
                            title="Lùi lại"
                            aria-label="Previous"
                            onClick={toPrevTrack}
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-backward" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-step-backward fa-w-14 fa-3x"><path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z" className=""></path></svg>
                        </button>
                    </div>
                    {isPlaying ? (
                        <button
                            className={classes.controlMain}
                            title="Tạm dừng"
                            onClick={() => setIsPlaying(false)}
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" className=""></path></svg>
                        </button>
                    ) : (
                        <button
                            className={classes.controlMain}
                            title="Nghe nhạc"
                            onClick={tracks != 0 ? () => setIsPlaying(true) : () => setIsPlaying(false)}
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                        </button>
                    )}
                    <div className={classes.control}>
                        <button
                            className={classes.controlBtn}
                            title="Tiếp theo"
                            aria-label="Next"
                            onClick={toNextTrack}
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-forward" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-step-forward fa-w-14 fa-3x"><path fill="currentColor" d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z" className=""></path></svg>
                        </button>
                    </div>
                    <div className={classes.control}>
                        <button
                            className={`${classes.controlBtn} ${isRepeat ? 'active' : ''}`}
                            title={isRepeat ? 'Lặp lại: tất cả' : 'Lặp lại: tắt'}
                            onClick={() => setIsRepeat(!isRepeat)}
                        >
                            <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="repeat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-repeat fa-w-16 fa-3x"><path fill="currentColor" d="M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z" className=""></path></svg>
                        </button>
                    </div>
                </div>
                <div className={classes.controlsBottom}>
                    <input
                        type="range"
                        className={classes.progress}
                        min="0"
                        max={duration ? duration : `${duration}`}
                        value={trackProgress}
                        style={{ background: trackStyling }}
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                    />
                </div>
            </div>
            <div className={classes.playingBarActions}>
                <div className={classes.control}>
                    <button
                        className={classes.controlBtn}
                        title="Danh sách phát"
                        aria-label="List music"
                        style={{
                            position: 'relative'
                        }}
                    >
                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-music" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-list-music fa-w-16 fa-3x"><path fill="currentColor" d="M16 256h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0-128h256a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16zm128 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM470.94 1.33l-96.53 28.51A32 32 0 0 0 352 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z" class=""></path></svg>
                    </button>
                </div>
                <div className={classes.control}>
                    <button
                        className={classes.controlBtn}
                        title="Lời bài hát"
                        aria-label="Lyrics"
                    >
                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microphone-stand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-microphone-stand fa-w-16 fa-3x"><path fill="currentColor" d="M289.54 60.53c-23.85 23.84-34.57 55.55-33 86.77l108.15 108.14c31.22 1.58 62.94-9.14 86.78-33l2.19-2.18L291.72 58.34zM6.74 423.18a26.67 26.67 0 0 0 1.07 36.57l44.38 44.37a26.74 26.74 0 0 0 36.63 1.14L224 385.93V496a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V329.44L344 280 232 168zM478.46 33.54a114.49 114.49 0 0 0-161.93 0l-2.19 2.18 161.94 161.93 2.18-2.18a114.49 114.49 0 0 0 0-161.93z" class=""></path></svg>
                    </button>
                </div>
                <button
                    className={classes.controlBtn}
                    title="Âm lượng"
                    aria-label="volume"
                >
                    <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-volume-up fa-w-18 fa-3x"><path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" className=""></path></svg>
                </button>
                <input
                    className={classes.volume}
                    type="range"
                    min="0"
                    value={volumeProgress}
                    max="1"
                    style={{ background: volumeStyling }}
                    onChange={() => { }}
                />
            </div>
        </div>
    )
}

export default PlayingBar;
