import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        margin: '-10px'
    },
    headerLeft: {
        padding: '10px'
    },
    headerRight: {
        margin: '-10px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    HeaderActionItem: {
        padding: '10px'
    },
    headerBtnToggleSidebar: {
        background: 'none',
        border: 'none',
        color: 'var(--color-text)',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
    headerSelectLanguage: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: 'var(--color-text)'
    }

})

const Header = props => {
    const { t } = useTranslation();
    const classes = useStyles();

    function handleClickSidebar() {
        props.toggleSidebarAction()
    }

    function handleChangeDarkMode() {
        props.toggleDarkModeAction()
    }

    function HandleChangeLanguage(language) {
        props.changeLanguage(language.target.value);
    }

    return (
        <div className={classes.headerWrapper}>
            <div className={classes.headerLeft}>
                <button className={classes.headerBtnToggleSidebar} onClick={handleClickSidebar}>
                    {props.toggleSidebar ? (
                        <svg width="24px" height="24px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-alt-from-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-alt-from-right fa-w-14 fa-3x"><path fill="currentColor" d="M448 76v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zm-96 218.9v-77.7c0-8.8-7.2-16-16-16H192v-93.9c0-7.1-8.6-10.7-13.6-5.7L36.7 244.7c-6.3 6.3-6.3 16.4 0 22.7l141.6 143.1c5 5 13.6 1.5 13.6-5.7v-93.9h144c8.9 0 16.1-7.2 16.1-16m32 0c0 26.5-21.5 48-48 48H224v61.9c0 35.6-43.1 53.4-68.2 28.3L14.1 290c-18.8-18.8-18.8-49.2 0-68L155.8 78.9C181 53.8 224 71.8 224 107.3v61.9h112c26.5 0 48 21.5 48 48v77.7z" className=""></path></svg>
                    ) : (
                        <svg width="24px" height="24px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-alt-from-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-alt-from-left fa-w-14 fa-3x"><path fill="currentColor" d="M0 436V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-218.9v77.7c0 8.8 7.2 16 16 16h144v93.9c0 7.1 8.6 10.7 13.6 5.7l141.6-143.1c6.3-6.3 6.3-16.4 0-22.7l-141.6-143c-5-5-13.6-1.5-13.6 5.7v93.9H112c-8.8-.1-16 7.1-16 15.9m-32 0c0-26.5 21.5-48 48-48h112v-61.9c0-35.6 43.1-53.4 68.2-28.3L433.9 222c18.8 18.8 18.8 49.2 0 68L292.2 433.1c-25.2 25.2-68.2 7.2-68.2-28.3v-61.9H112c-26.5 0-48-21.5-48-48v-77.8z" className=""></path></svg>
                    )}
                </button>
            </div>
            <div className={classes.headerRight}>
                <div className={classes.HeaderActionItem}>
                    <select
                        defaultValue={props.language}
                        onChange={HandleChangeLanguage}
                        className={classes.headerSelectLanguage}
                    >
                        <option value={"vi"}>{t('Tiếng Việt')}</option>
                        <option value={"en"}>{t('Tiếng Anh')}</option>
                    </select>
                    {/* <ChangeLanguage /> */}
                </div>
                <div className={classes.HeaderActionItem}>
                    <span>{t('Chế độ tối')}</span>
                    <Switch
                        color="primary"
                        checked={props.toggleDarkMode}
                        onChange={handleChangeDarkMode}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
            </div>
        </div>
    );
}

const getStateFromStore = state => {
    return {
        toggleSidebar: state.toggleSidebar,
        toggleDarkMode: state.toggleDarkMode,
        language: state.language
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleSidebarAction: () => {
            dispatch(actions.toggleSidebarAction());
        },
        toggleDarkModeAction: () => {
            dispatch(actions.toggleDarkMode());
        },
        changeLanguage: (language) => {
            dispatch(actions.changeLanguage(language));
        }
    }
}


export default connect(getStateFromStore, mapDispatchToProps)(Header);