import React from 'react'
import ListAlbum from '../components/ListAlbum';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <div className="mtb-24">
      <Container maxWidth={false}>
        <div className="section-album">
          <ListAlbum title="Nhạc Việt Nam" album="top100_VN"> </ListAlbum>
        </div>
        <div className="section-album">
          <ListAlbum title="Nhạc AM" album="top100_AM"> </ListAlbum>
        </div>
        <div className="section-album">
          <ListAlbum title="Nhạc Hàn, Việt, Nhật" album="top100_CA"> </ListAlbum>
        </div>
        <div className="section-album">
          <ListAlbum title="Nhạc không lời" album="top100_KL"> </ListAlbum>
        </div>
      </Container>
    </div>
  )
}

export default Home
