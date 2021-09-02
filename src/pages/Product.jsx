// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Breadcrumb from '../components/Breadcrumb';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { makeStyles } from '@material-ui/core/styles';
// import { DataGrid } from '@material-ui/data-grid';

// const useStyles = makeStyles({
//     productWrapper: {
//         padding: '24px'
//     }
// })

// const formatVND = value => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const classes = useStyles();
//     useEffect(() => {
//         axios.get('http://localhost:4000/products')
//             .then(res => {
//                 setProducts(res.data);
//             })
//     }, [])

//     return (
//         <div className={classes.productWrapper}>
//             <div className="layout-main__breadcrum"><Breadcrumb /></div>

//             <div style={{ height: 400, width: '100%' }}>
//                 <table>
//                     <thead>
//                         <tr>
//                             <td>1</td>
//                             <td>1</td>
//                             <td>1</td>
//                             <td>1</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>123</td>
//                             <td>123</td>
//                             <td>123</td>
//                             <td>123</td>
//                             <td>123</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Product;