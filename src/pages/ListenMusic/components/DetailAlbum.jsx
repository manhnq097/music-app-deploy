import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Grid } from '@material-ui/core';
import waveGifPrimary from '../../../libs/images/waves-audio-primary.gif';

const useStyles = makeStyles({
    coverAlbum: {
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'sticky',
        top: '0',
        textAlign: 'center'
    },
    coverName: {
        fontSize: '4.8rem',
        fontFamily: 'GoogleSans-Bold',
        position: 'relative',
        marginBottom: '20px'
    },
    coverPlayBtn: {
        border: 'none',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-primary)',
        color: '#FFFFFF',
        borderRadius: '30px',
        transition: 'transform 200ms ease-in-out',
        padding: '10px 20px',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    table: {
        width: '100%',
        '& td, & th': {
            verticalAlign: 'middle'
        },
        '& thead': {
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--background-page)',
        },
        '& thead th': {
            textTransform: 'uppercase',
            fontFamily: 'GoogleSans-Bold',
            padding: '20px'
        },
        '& tbody tr': {
            borderBottom: '1px solid var(--colorBorder)'
        },
        '& tbody td': {
            padding: '10px 20px',
        },
        '& tr td:first-child': {
            borderRadius: '6px 0 0 6px'
        },
        '& tr td:last-child': {
            borderRadius: ' 0 6px 6px 0'
        },
        '& tbody tr:hover': {
            backgroundColor: 'rgba(0,0,0,0.15)',
            borderRadius: '4px'
        },
        '& tr:hover $songIndex': {
            display: 'none'
        },
        '& tr:hover $songStatus': {
            display: 'block'
        },
    },
    playing: {
        '& $songName, & $songIndex': {
            color: 'var(--color-primary)'
        }
    },
    songTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    songImage: {
        marginRight: '10px',
        '&>img': {
            width: '40px',
            height: '40px'
        }
    },
    songName: {
        fontSize: '1.6rem',
        fontFamily: 'GoogleSans-Bold'
    },
    coverTop: {
        marginBottom: '20px'
    },
    coverBottom: {
        position: 'relative',
    },
    coverImage: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '6px'
    },
    coverPlayBtnText: {
        marginLeft: '10px',
        textTransform: 'uppercase',
        fontFamily: 'GoogleSans-Bold'
    },
    songButton: {
        border: 'none',
        background: 'none',
        color: '#FFFFFF',
    },
    songPlaying: {
        color: 'var(--color-primary)'
    },
    songIndex: {
        display: 'block'
    },
    songStatus: {
        display: 'none'
    }
})

const DetailAlbum = (props) => {
    const classes = useStyles();
    const { isPlaying, setIsPlaying } = props;
    const { onClickPlayAll, trackIndex, albumString, albumIndex } = props;
    const [playList, setPlayList] = useState([]);
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState();
    const album = useParams().album;
    const index = JSON.parse(useParams().index);
    useEffect(() => {
        axios.get('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3vfhBNNhdn7z1oTVGF_b-cV4UhnnP_z29QW4Re6UQ0LNNYyTgmXqcMQPY')
            .then(res => {
                setPlayList(res.data.songs[album][index].songs);
                setTitle(res.data.songs[album][index].name);
                setCover(res.data.songs[album][index].songs[0].coverImage)
            })
            .catch(() => {
                console.error('Không lấy được dữ liệu');
            });
        return function cleanup() {
            setPlayList([])
        };
    }, [])

    const handlePlayAlbum = (album, index, albumString, albumIndex) => {
        if (albumString === album && albumIndex === index) {
            onClickPlayAll(album, 0, albumString, albumIndex);
        } else {
            onClickPlayAll(album, index, albumString, albumIndex);
        }
        setIsPlaying(true);
    }

    return (
        <div className={classes.detailAlbum}>
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <div className={classes.coverAlbum}>
                            <div className={classes.coverTop}>
                                <img className={classes.coverImage} src={cover} />
                            </div>
                            <div className={classes.coverBottom}>
                                <div className={classes.coverName}>{title}</div>
                                {(albumString === album && albumIndex === index) && isPlaying ? (
                                    <button
                                        className={classes.coverPlayBtn}
                                        title="Tạm dừng"
                                        onClick={() => setIsPlaying(false)}
                                    >
                                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" className=""></path></svg>
                                        <span className={classes.coverPlayBtnText}>Tạm dừng</span>
                                    </button>
                                ) : (
                                    albumString === album && albumIndex === index ? (
                                        <button
                                            className={classes.coverPlayBtn}
                                            title="Tiếp tục nghe"
                                            onClick={() => setIsPlaying(true)}
                                        >
                                            <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                            <span className={classes.coverPlayBtnText}>Tiếp tục nghe</span>
                                        </button>
                                    ) : (
                                        <button
                                            className={classes.coverPlayBtn}
                                            title="Nghe tất cả"
                                            onClick={() => handlePlayAlbum(playList, 0, album, index)}
                                        >
                                            <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                            <span className={classes.coverPlayBtnText}>Nghe tất cả</span>
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={8}>
                        <div className={classes.playList}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '50px' }}>#</th>
                                        <th className="text-left">Tiêu đề</th>
                                        <th className="text-left">Ca sĩ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {playList.map((song, i) => {
                                        return (
                                            <tr key={i} className={trackIndex === i && albumString === album && albumIndex === index ? classes.playing : ''}>
                                                <td className="text-center">
                                                    {trackIndex === i && albumString === album && albumIndex === index ? (
                                                        isPlaying ? (
                                                            <>
                                                                <div className={classes.songIndex}>
                                                                    <img width="16px" height="16px" src={waveGifPrimary} />
                                                                </div>
                                                                <div className={classes.songStatus}>
                                                                    <button
                                                                        className={classes.songButton}
                                                                        onClick={() => setIsPlaying(false)}
                                                                    >
                                                                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" className=""></path></svg>
                                                                    </button>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className={classes.songIndex}>{i + 1}</div>
                                                                <div className={classes.songStatus}>
                                                                    <button
                                                                        className={classes.songButton}
                                                                        onClick={() => setIsPlaying(true)}
                                                                    >
                                                                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )
                                                    ) : (
                                                        <>
                                                            <div className={classes.songIndex}>{i + 1}</div>
                                                            <div className={classes.songStatus}>
                                                                <button
                                                                    className={classes.songButton}
                                                                    onClick={() => handlePlayAlbum(playList, i, album, index)}
                                                                >
                                                                    <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className={classes.songTitle}>
                                                        {song.avatar ? (
                                                            <div className={classes.songImage}>
                                                                <img src={song.avatar ? song.avatar : ''} />
                                                            </div>
                                                        ) : ''}
                                                        <div className={classes.songName}>{song.title}</div>
                                                    </div>
                                                </td>
                                                <td>{song.creator}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default DetailAlbum