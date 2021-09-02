import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-5px'
  },
  galleryItem: {
    padding: '5px',
    flexBasis: '50%',
  },
  galleryImage: {
    width: '100%',
    objectFir: 'cover'
  }
})

function Gallery() {
  const classes = useStyles();
  return (
    <ul className={classes.gallery}>
      <li className={classes.galleryItem}>
        <img
          src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/m/a/mausac_black_10f20san001__1__e46de169136f4d5d99398e1f9e4ddbdc_5.jpg"
          alt="Product"
          className={classes.galleryImage}
        />
      </li>
      <li className={classes.galleryItem}>
        <img
          src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/m/a/mausac_black_10f20san001__1__e46de169136f4d5d99398e1f9e4ddbdc_5.jpg"
          alt="Product"
          className={classes.galleryImage}
        />
      </li>
      <li className={classes.galleryItem}>
        <img
          src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/m/a/mausac_black_10f20san001__1__e46de169136f4d5d99398e1f9e4ddbdc_5.jpg"
          alt="Product"
          className={classes.galleryImage}
        />
      </li>
      <li className={classes.galleryItem}>
        <img
          src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/m/a/mausac_black_10f20san001__1__e46de169136f4d5d99398e1f9e4ddbdc_5.jpg"
          alt="Product"
          className={classes.galleryImage}
        />
      </li>
    </ul>
  )
}

export default Gallery
