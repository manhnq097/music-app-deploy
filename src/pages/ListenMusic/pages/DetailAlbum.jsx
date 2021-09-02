import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

const useStyles = makeStyles({
  coverAlbum: {
    paddingTop: '50px',
    paddingBottom: '50px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: '0',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121212 100%)',
    }
  },
  coverTag: {
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    fontFamily: 'GoogleSans-Bold',
    marginBottom: '10px',
    position: 'relative'
  },
  coverName: {
    fontSize: '7.2rem',
    fontFamily: 'GoogleSans-Bold',
    position: 'relative'
  },
  coverPlayBtn: {
    border: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--color-primary)',
    width: '56px',
    height: '56px',
    color: '#FFFFFF',
    borderRadius: '50%',
    transition: 'transform 200ms ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  table: {
    width: '100%',
    '& td, & th': {
      padding: '10px 20px',
      verticalAlign: 'middle'
    },
    '& thead': {
      borderBottom: '1px solid #FFFFFF',
      marginBottom: '10px'
    },
    '& tr td:first-child': {
      borderRadius: '6px 0 0 6px'
    },
    '& tr td:last-child': {
      borderRadius: ' 0 6px 6px 0'
    },
    '& tr:hover': {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderRadius: '4px'
    },
    '& tr:hover $songIndex': {
      display: 'none'
    },
    '& tr:hover $songStatus': {
      display: 'block'
    },
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
    fontSize: '1.6rem'
  },
  coverTop: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '20px'
  },
  coverBottom: {
    position: 'relative',
  },
  coverTopLeft: {
    marginRight: '20px'
  },
  coverImage: {
    width: '232px',
    height: '232px',
    objectFit: 'cover'
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
  const { album, index } = useParams();
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState();

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
    onClickPlayAll(album, index, albumString, albumIndex);
    setIsPlaying(true);
  }

  return (
    <div className={classes.detailAlbum}>
      <div
        className={classes.coverAlbum}
        style={{
          background: 'var(--color-primary)'
        }}
      >
        <Container maxWidth={false}>
          <div className={classes.coverTop}>
            <div className={classes.coverTopLeft}>
              <img className={classes.coverImage} src={cover} />
            </div>
            <div className={classes.coverTopRight}>
              <div className={classes.coverTag}>PLAYLIST</div>
              <div className={classes.coverName}>{title}</div>
            </div>
            <div className={classes.coverAvatar}>

            </div>
          </div>
          <div className={classes.coverBottom}>
            {(albumString === album && albumIndex === index) && isPlaying ? (
              <button
                className={classes.coverPlayBtn}
                title="Dừng"
                onClick={() => setIsPlaying(false)}
              >
                <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-pause fa-w-14 fa-3x"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" className=""></path></svg>
              </button>
            ) :
              (<button
                className={classes.coverPlayBtn}
                title="Nghe tất cả"
                onClick={() => handlePlayAlbum(playList, 0, album, index)}
              >
                <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
              </button>)
            }

          </div>
        </Container>
      </div>
      <Container maxWidth={false}>
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
                  <tr key={i}>
                    <td className="text-center">
                      {trackIndex === i && albumString === album && albumIndex === index ? (
                        <div className={`${classes.songButton} ${classes.songPlaying}`}>
                          <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="waveform-path" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-waveform-path fa-w-20 fa-3x"><path fill="currentColor" d="M624 263h-43.69l-12.65-84a24 24 0 0 0-23.1-20h-.12c-9.5 0-21.38 7.22-23.91 18.95L500.16 281 471.75 83.44a24 24 0 0 0-47.41-.39l-38.5 239-42.06-302.46a24 24 0 0 0-47.56 0l-42.06 302.47-38.5-239a24 24 0 0 0-47.41.39L139.84 281l-20.37-103a23.54 23.54 0 0 0-23.59-19h-.5a24 24 0 0 0-23 20l-12.69 84H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h81.19l23.34 117c2.56 11.89 11.94 19.42 24.13 19a24.08 24.08 0 0 0 23.09-20.45l25.5-178.08L232.34 491c1.82 11.13 12.63 19.8 23.85 20.05a24 24 0 0 0 23.59-20.61L320 200.7l40.22 289.71a24 24 0 0 0 47.44.54l39.09-242.5 25.5 178.13a24 24 0 0 0 23 20.42c12 0 21.84-8 24.19-18.95l23.34-117H624a16 16 0 0 0 16-16V279a16 16 0 0 0-16-16z" className=""></path></svg>
                        </div>
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
      </Container>
    </div>
  )
}


export default DetailAlbum