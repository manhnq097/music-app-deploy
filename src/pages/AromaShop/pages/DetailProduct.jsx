// import { makeStyles } from '@material-ui/core/styles';
// import { useParams } from "react-router-dom"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//     detailProduct: {
//         paddingTop: '100px',
//         paddingBottom: '100px',
//         backgroundColor: "#FFFFFF"
//     },
//     productTitle: {
//         fontSize: '2.4rem',
//         fontWeight: 'bold',
//         marginBottom: '20px'
//     },
//     productCode: {
//         marginBottom: '10px'
//     },
//     productPrice: {
//         fontSize: '2.4rem',
//         fontWeight: 'bold',
//         color: 'var(--color-primary)',
//         marginBottom: '10px'
//     }
// })

// const formatVND = value => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)

// const DetailProduct = () => {
//     const classes = useStyles();
//     const { productId } = useParams()
//     const [product, setProduct] = useState({})
//     useEffect(() => {
//         axios.get('http://localhost:4000/products')
//             .then(res => setProduct(res.data.find(product => product.id === productId)))
//     }, []);

//     return (
//         <div className={classes.detailProduct}>
//             <Container>
//                 <Grid container spacing={3}>
//                     <Grid item md={6}>
//                         <img src={product.image} alt="" />
//                     </Grid>
//                     <Grid item md={6}>
//                         <div className={classes.productTitle}>{product.title}</div>
//                         <div className={classes.productCode}>Mã: {product.code}</div>
//                         <div className={classes.productPrice}>{formatVND(product.price)}</div>
//                         <div className={classes.productCategory}>{product.category}</div>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>

//     )
// }

// export default DetailProduct
