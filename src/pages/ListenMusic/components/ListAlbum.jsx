import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import waveGifWhite from '../../../libs/images/waves-audio-white.gif';

const useStyles = makeStyles({
    album: {
        padding: '16px',
        borderRadius: '6px',
        backgroundColor: 'var(--background-section)',
        boxShadow: 'var(--box-shadow)',
        '& $albumImage img': {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        '&:hover $albumPlayBtn': {
            display: 'inline-flex',
            transform: 'translateY(0)',
            opacity: '1',
        },
        '&:hover $albumImage::before': {
            opacity: 1
        },
        '&.playing': {
            '& $albumImage::before': {
                opacity: 1
            },
            '& $albumPlayBtn': {
                display: 'inline-flex',
                opacity: 1,
                transform: 'translateY(0)',
            }
        }
    },
    listAlbum: {
        display: 'block'
    },
    albumImage: {
        display: 'block',
        '&:before': {
            content: '""',
            position: 'absolute',
            opacity: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, .5)'
        },
    },
    albumCover: {
        marginBottom: '10px',
        position: 'relative',
    },
    albumPlayBtn: {
        border: 'none',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'var(--color-primary)',
        width: '40px',
        height: '40px',
        color: '#FFFFFF',
        borderRadius: '50%',
        transform: 'translateY(5px)',
        transition: 'transform 200ms ease-in-out',
        opacity: '0',
        '&:hover': {
            transform: 'translateY(0) scale(1.1) !important',
        },
        '&:hover $pauseIcon': {
            display: 'inline-block'
        },
        '&:hover $playingIcon': {
            display: 'none'
        }
    },
    albumTitle: {
        color: 'var(--color-text)',
        fontSize: '16px',
        fontFamily: 'GoogleSans-Bold',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
    playingIcon: {
        display: 'inline-block'
    },
    pauseIcon: {
        display: 'none'
    },
    noData: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

const ListAlbum = (props) => {
    const classes = useStyles();
    const { isPlaying, albumString, albumIndex, setIsPlaying, onClickPlayAll } = props;
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetAlbum = () => {
            axios.get('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3vfhBNNhdn7z1oTVGF_b-cV4UhnnP_z29QW4Re6UQ0LNNYyTgmXqcMQPY')
                .then(res => {
                    setAlbums(res.data.songs[props.album]);
                })
                .catch(() => {
                    console.log('Không lấy được dữ liệu');
                });
        }
        fetAlbum();
        return function cleanup() {
            setAlbums([])
        };
    }, [props.album])

    return (
        <div className={classes.listAlbum}>
            <h2
                style={{
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontFamily: 'GoogleSans-Bold',
                }}
            >
                {props.title ? props.title : 'Title'}</h2>
            {albums ? (
                <Grid container spacing={3}>
                    {albums.map((album, index) => {
                        return (
                            <Grid item md={2} key={index}>
                                <div className={`${classes.album} ${albumString === props.album && albumIndex === index ? 'playing' : ''}`}>
                                    <div className={classes.albumCover}>
                                        <Link to={`/listen-music/detail-album/${props.album}/${index}`} className={classes.albumImage} title={album.name}>
                                            <img src={album.songs ? album.songs[0].coverImage : ''} alt="" />
                                        </Link>
                                        {(albumString === props.album && albumIndex === index) && isPlaying ? (
                                            <>
                                                <button
                                                    className={classes.albumPlayBtn}
                                                    title="Tạm dừng"
                                                    onClick={() => setIsPlaying(false)}
                                                >
                                                    <span className={classes.playingIcon}>
                                                        <img width="16px" height="16px" src={waveGifWhite} />
                                                    </span>
                                                    <span className={classes.pauseIcon}>
                                                        <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" class=""></path></svg>
                                                    </span>
                                                </button>
                                            </>
                                        ) : (
                                            albumString === props.album && albumIndex === index ? (
                                                <button
                                                    className={classes.albumPlayBtn}
                                                    title="Tiếp tục nghe"
                                                    onClick={() => setIsPlaying(true)}
                                                >
                                                    <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                </button>
                                            ) : (

                                                <button
                                                    className={classes.albumPlayBtn}
                                                    title="Nghe tất cả"
                                                    onClick={() => onClickPlayAll(album.songs, 0, props.album, index)}
                                                >
                                                    <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <Link to={`/listen-music/detail-album/${props.album}/${index}`} className={classes.albumTitle} title={album.name}>
                                        {album.name}
                                    </Link>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            ) : (
                <div className={classes.noData}>Không có dữ liệu</div>
            )}
        </div>
    )
}

export default ListAlbum
