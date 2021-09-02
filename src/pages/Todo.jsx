import Breadcrumb from '../components/Breadcrumb';
import DragDropTodo from '../components/DragDropTodo';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    todoWrapper: {
        padding: '24px'
    }
})

const Todo = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const { t } = useTranslation();

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);

    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div className={classes.todoWrapper}>
            <div className="layout-main__breadcrum"><Breadcrumb /></div>
            <div style={{ marginBottom: '20px', textAlign: 'right' }}>
                <Button
                    onClick={handleClickOpen('paper')}
                    variant="contained"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'rgb(255, 255, 255)'
                    }}
                >
                    {t('Add new')}
                </Button>
            </div>
            <DragDropTodo />
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth="lg"
            >
                <DialogTitle id="scroll-dialog-title">{t('Add new')}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <FormGroup>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Title</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Detail</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>Add new</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Todo;