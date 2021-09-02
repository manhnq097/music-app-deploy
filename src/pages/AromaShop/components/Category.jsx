import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  categoryItem: {
    '&:not(:first-child)': {
      marginTop: '12px'
    }
  },
  categoryLink: {
    color: '#7b838a'
  }
})

function Category() {
  const classes = useStyles();
  return (
    <ul className={classes.category}>
      <li className={classes.categoryItem}>
        <Link className={classes.categoryLink} to="/">Trang chủ</Link>
      </li>
      <li className={classes.categoryItem}>
        <Link className={classes.categoryLink} to="/">Sản phẩm</Link>
      </li>
      <li className={classes.categoryItem}>
        <Link className={classes.categoryLink} to="/">Tin tức</Link>
      </li>
      <li className={classes.categoryItem}>
        <Link className={classes.categoryLink} to="/">Liên hệ</Link>
      </li>
    </ul>
  )
}

export default Category
