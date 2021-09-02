import Grid from '@material-ui/core/Grid';
import heroBanner from '../images/hero-banner.png';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  heroBannerHeading: {
    fontSize: '3rem',
    color: '#555',
    marginBottom: '12px'
  },
  heroBannerTitle: {
    fontSize: '50px',
    marginBottom: '25px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  heroBannerBrief: {
    color: '#777777',
    marginBottom: '40px'
  },
  heroBannerButton: {
    padding: '12px 41px',
    border: '1px solid var(--color-primary)',
    backgroundColor: 'var(--color-primary)',
    color: '#FFFFFF',
    borderRadius: '50px',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'var(--background-section)',
      color: 'var(--color-text)'
    }
  }
})

const HeroBanner = () => {
  const classes = useStyles();
  return (
    <div className="hero-banner">
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={5}>
          <Grid item md={5}>
            <img src={heroBanner} alt="hero-banner" />
          </Grid>
          <Grid item md={7}>
            <h4 className={classes.heroBannerHeading}>Shop is fun</h4>
            <h1 className={classes.heroBannerTitle}>Browse our premium product</h1>
            <p className={classes.heroBannerBrief}>
              Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.
            </p>
            <a className={classes.heroBannerButton} href="# ">Browse Now</a>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default HeroBanner