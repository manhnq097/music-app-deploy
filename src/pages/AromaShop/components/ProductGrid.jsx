// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import productApi from '../../../api/productApi';

// const useStyles = makeStyles({
//     productGrid: {
//         textAlign: 'center',
//     },
//     productItem: {
//         '&:hover $productActions': {
//             opacity: '1',
//             transform: 'translateY(0)'
//         },
//         '&:hover $productTitleLink': {
//             color: 'var(--color-primary)'
//         }
//     },
//     productTop: {
//         position: 'relative',
//         overflow: 'hidden',
//     },
//     productBottom: {
//         padding: '20px'
//     },
//     productImage: {
//         '&>img': {
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover'
//         }
//     },
//     productActions: {
//         opacity: '0',
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'rgba(255, 255, 255, 0.5)',
//         padding: '20px',
//         transform: 'translateY(100%)',
//         transition: '0.4s'
//     },
//     productAction: {
//         display: 'inline-block',
//         '&:not(:first-child)': {
//             marginLeft: '10px'
//         }
//     },
//     productActionLink: {
//         display: 'inline-flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '40px',
//         height: '40px',
//         backgroundColor: 'var(--color-primary)',
//         color: '#FFFFFF',
//         opacity: 0.6,
//         '&:hover': {
//             opacity: 1
//         }
//     },
//     productCategory: {
//         marginBottom: '10px',
//         color: '#777777'
//     },
//     productTitle: {
//         marginBottom: '15px',
//         fontSize: '2rem',
//         fontWeight: 'bold'
//     },
//     productTitleLink: {
//         color: 'var(--color-text)',
//         '&:hover': {
//             color: 'var(--color-primary)'
//         }
//     },
//     productPrice: {
//         fontSize: '1.8rem',
//         color: '#777777',
//         fontWeight: 'bold'
//     }
// })

// const ProductGrid = () => {
//     const classes = useStyles();
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         console.log(productApi())
//     }, []);
//     const formatVND = value => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
//     return (
//         <div className={classes.productGrid}>
//             <Grid container spacing={3}>
//                 {products.map((product) => {
//                     return (
//                         <Grid item md={3} key={product.id}>
//                             <div className={classes.productItem}>
//                                 <div className={classes.productTop}>
//                                     <div className={classes.productImage}>
//                                         <img src={product.image} alt={product.title} />
//                                     </div>
//                                     <ul className={classes.productActions}>
//                                         <li className={classes.productAction}>
//                                             <Link to={`/aroma-shop/product/${product.id}`} className={classes.productActionLink}>
//                                                 <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-eye fa-w-18 fa-3x"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" className=""></path></svg>
//                                             </Link>
//                                         </li>
//                                         <li className={classes.productAction}>
//                                             <Link to="# " className={classes.productActionLink}>
//                                                 <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" className=""></path></svg>
//                                             </Link>
//                                         </li>
//                                         <li className={classes.productAction}>
//                                             <Link to="# " className={classes.productActionLink}>
//                                                 <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16 fa-3x"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" className=""></path></svg>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className={classes.productBottom}>
//                                     <div className={classes.productCategory}>{product.category}</div>
//                                     <div className={classes.productTitle}>
//                                         <Link to={`/aroma-shop/product/${product.id}`} className={classes.productTitleLink}>
//                                             {product.title}
//                                         </Link>
//                                     </div>
//                                     <div className={classes.productPrice}>{formatVND(product.price)}</div>
//                                 </div>
//                             </div>
//                         </Grid>
//                     )
//                 })}
//             </Grid>
//         </div>
//     )
// }

// export default ProductGrid
