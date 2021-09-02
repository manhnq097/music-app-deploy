import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    articleWrapper: {
        padding: '24px'
    }
})

const Article = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        console.log(newPage);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/news')
            .then(res => {
                setNewsList(res.data);
            })
    }, [])
    const rows = newsList.slice((newItem) => {
        return ({
            title: newItem.title,
            brief: newItem.brief,
            content: newItem.content,
            image: newItem.image,
            date: newItem.date
        })
    });
    return (
        <div className={classes.articleWrapper}>
            <div className="layout-main__breadcrum"><Breadcrumb /></div>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">STT</TableCell>
                                <TableCell>{t('Title')}</TableCell>
                                <TableCell>{t('Description')}</TableCell>
                                <TableCell>{t('Image')}</TableCell>
                                <TableCell align="center">{t('Action')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.brief}</TableCell>
                                        <TableCell>{row.image ? <img src={row.image} alt={row.title} /> : ''}</TableCell>
                                        <TableCell align="center">
                                            <IconButton style={{ color: 'var(--color-edit)' }} >
                                                <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-pen fa-w-16 fa-3x"><path fill="currentColor" d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z" className=""></path></svg>
                                            </IconButton>
                                            <IconButton style={{ color: 'var(--color-delete)' }} onClick={handleClickOpen}>
                                                <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash fa-w-14 fa-3x"><path fill="currentColor" d="M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z" className=""></path></svg>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogTitle id="alert-dialog-title">{t('Delete')}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('Are you sure you want to delete?')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('Cancel')}</Button>
                    <Button onClick={handleClose} autoFocus style={{ backgroundColor: 'var(--color-delete)', color: '#FFFFFF' }}>{t('Delete')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Article;