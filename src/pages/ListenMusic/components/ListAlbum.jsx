import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  listAlbum: {
    display: 'block'
  },
  album: {
    display: 'block',
    backgroundColor: '#181818',
    padding: '16px',
    borderRadius: '4px',
    transition: 'background 200ms ease-in-out',
    '&:hover': {
      backgroundColor: '#282828'
    },
    '&:hover $albumPlayBtn': {
      display: 'inline-flex',
      transform: 'translateY(0)',
      opacity: '1',
    }
  },
  albumCover: {
    marginBottom: '20px',
    position: 'relative',
    '&>img': {
      width: '100%'
    }
  },
  albumPlayBtn: {
    border: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
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
    }
  },
  albumTitle: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontFamily: 'GoogleSans-Bold'
  },
  noData: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
})

const ListAlbum = (props) => {
  const classes = useStyles();

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
                <Link to={`/listen-music/detail-album/${props.album}/${index}`} className={classes.album} title={album.name}>
                  <div className={classes.albumCover}>
                    <img src={album.songs ? album.songs[0].coverImage : ''} alt="" />
                    <button
                      className={classes.albumPlayBtn}
                      title="Nghe tất cả"
                    >
                      <svg width="16px" height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14 fa-3x"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                    </button>
                  </div>
                  <div className={classes.albumTitle}>{album.name}</div>
                </Link>
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
