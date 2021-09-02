import HeroBanner from '../components/HeroBanner';
import Container from '@material-ui/core/Container';
import ProductGrid from '../components/ProductGrid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  trendingProduct: {
    paddingTop: '120px',
    paddingBottom: '70px',
    backgroundColor: '#FFFFFF'
  },
  bestSellters: {
    paddingTop: '120px',
    paddingBottom: '70px',
    backgroundColor: '#FFFFFF'
  }
})

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeroBanner />
      <div className={classes.trendingProduct}>
        <Container>
          <ProductGrid />
        </Container>
      </div>
      <div className={classes.bestSellters}>
        <Container>
          <ProductGrid />
        </Container>
      </div>
    </>
  )
}

export default Home;