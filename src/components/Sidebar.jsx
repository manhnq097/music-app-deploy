import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../actions';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        height: '100%',
    },
    logo: {
        padding: '20px 15px',
        textAlign: 'center',
    },
    logoNav: {
        display: 'inline-block',
        fontWeight: 'bold',
        fontFamily: "Charm",
        userSelect: 'none',
    },
    logoIcon: {
        fontSize: '2.6rem',
        display: 'inline-flex',
        width: '48px',
        height: '48px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: '#FFFFFF',
        background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    },
    logoText: {
        fontSize: '3.2rem',
        marginLeft: '20px',
        color: 'var(--color-primary)'
    },
    categorys: {
        overflowY: 'auto',
        flexGrow: 1,
        '&:WebkitScrollbar': {
            width: '4px'
        }
    },
    category: {
        '&:not(:first-child)': {
            marginTop: (props) => props.toggleSidebar ? '30px' : '5px'
        }
    },
    categoryHeading: {
        paddingLeft: '15px',
        paddingRight: '15px',
        color: 'rgb(220, 220, 220)',
        marginBottom: '10px',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    categoryNavLink: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        color: 'var(--color-text)',
        position: 'relative',
        justifyContent: (props) => props.toggleSidebar ? 'flex-start' : 'center',
        '&:hover, &.active': {
            background: 'var(--color-primary)',
            color: '#FFFFFF',
        },
        '&:not(:first-child)': {
            marginTop: '10px'
        }
    },
    actions: {
        paddingTop: '20px'
    },
    action: {
        '&:not(:first-child)': {
            marginTop: '10px'
        }
    },
    btnToggleSidebar: {
        display: 'flex',
        justifyContent: props => props.toggleSidebar ? 'flex-start' : 'center',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: 'var(--color-text)',
        width: '100%',
        padding: '10px 15px',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
});

const Sidebar = (props) => {

    const { t } = useTranslation();
    const classes = useStyles(props);

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
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <Link className={classes.logoNav} to="/" title={t('Profile')}>
                    <span className={classes.logoIcon}>M</span>
                </Link>
            </div>
            <div className={classes.categorys}>
                <div className={classes.category}>
                    <NavLink className={classes.categoryNavLink}
                        exact
                        to="/"
                        title={t('Thông tin cá nhân')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="address-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-address-card fa-w-18 fa-3x"><path fill="currentColor" d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Thông tin cá nhân')}</span> : ''}
                    </NavLink>
                </div>
                <div className={classes.category}>
                    {props.toggleSidebar ? (
                        <h5 className={classes.categoryHeading}>{t('Website')}</h5>
                    ) : ''}
                    {/* <NavLink className={classes.categoryNavLink}
                        to="/aroma-shop"
                        title={t('Aroma Shop')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-link fa-w-16 fa-3x"><path fill="currentColor" d="M301.148 394.702l-79.2 79.19c-50.778 50.799-133.037 50.824-183.84 0-50.799-50.778-50.824-133.037 0-183.84l79.19-79.2a132.833 132.833 0 0 1 3.532-3.403c7.55-7.005 19.795-2.004 20.208 8.286.193 4.807.598 9.607 1.216 14.384.481 3.717-.746 7.447-3.397 10.096-16.48 16.469-75.142 75.128-75.3 75.286-36.738 36.759-36.731 96.188 0 132.94 36.759 36.738 96.188 36.731 132.94 0l79.2-79.2.36-.36c36.301-36.672 36.14-96.07-.37-132.58-8.214-8.214-17.577-14.58-27.585-19.109-4.566-2.066-7.426-6.667-7.134-11.67a62.197 62.197 0 0 1 2.826-15.259c2.103-6.601 9.531-9.961 15.919-7.28 15.073 6.324 29.187 15.62 41.435 27.868 50.688 50.689 50.679 133.17 0 183.851zm-90.296-93.554c12.248 12.248 26.362 21.544 41.435 27.868 6.388 2.68 13.816-.68 15.919-7.28a62.197 62.197 0 0 0 2.826-15.259c.292-5.003-2.569-9.604-7.134-11.67-10.008-4.528-19.371-10.894-27.585-19.109-36.51-36.51-36.671-95.908-.37-132.58l.36-.36 79.2-79.2c36.752-36.731 96.181-36.738 132.94 0 36.731 36.752 36.738 96.181 0 132.94-.157.157-58.819 58.817-75.3 75.286-2.651 2.65-3.878 6.379-3.397 10.096a163.156 163.156 0 0 1 1.216 14.384c.413 10.291 12.659 15.291 20.208 8.286a131.324 131.324 0 0 0 3.532-3.403l79.19-79.2c50.824-50.803 50.799-133.062 0-183.84-50.802-50.824-133.062-50.799-183.84 0l-79.2 79.19c-50.679 50.682-50.688 133.163 0 183.851z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Aroma Shop')}</span> : ''}
                    </NavLink> */}
                </div>
                <div className={classes.category}>
                    {props.toggleSidebar ? (
                        <h5 className={classes.categoryHeading}>{t('Ứng dụng')}</h5>
                    ) : ''}
                    <NavLink className={classes.categoryNavLink}
                        to="/listen-music"
                        title={t('Nghe nhạc')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="music" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-music fa-w-16 fa-3x"><path fill="currentColor" d="M480.06 0a31.94 31.94 0 0 0-9.68 1.5l-304 96A32 32 0 0 0 144 128v235.09A109.68 109.68 0 0 0 96 352c-53 0-96 35.81-96 80s43 80 96 80c49.38 0 89.56-31.16 94.91-71.09a38.74 38.74 0 0 0 1.06-8.66V256l272-85.91v129A109.78 109.78 0 0 0 416 288c-53 0-96 35.81-96 80s43 80 96 80c49.38 0 89.56-31.19 94.94-71.12a38.94 38.94 0 0 0 1-8.22c0-.22.06-.44.06-.66V32a32 32 0 0 0-31.94-32zM96 464c-28.28 0-48-16.88-48-32s19.72-32 48-32 48 16.84 48 32-19.72 32-48 32zm368-96c0 15.12-19.72 32-48 32s-48-16.88-48-32 19.72-32 48-32 48 16.84 48 32zm0-248.25l-272 85.91v-65.91l272-85.87z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Nghe nhạc')}</span> : ''}
                    </NavLink>
                    {/* <NavLink className={classes.categoryNavLink}
                        to="/covid-19"
                        title={t('Theo dõi COVID-19')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="shield-virus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-shield-virus fa-w-16 fa-3x"><path fill="currentColor" d="M272,240a16,16,0,1,0,16,16A16,16,0,0,0,272,240ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.12,48.12,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM262.13,478.77a16.1,16.1,0,0,1-12.32,0C152.61,438.27,48,311.21,48,128a15.9,15.9,0,0,1,9.9-14.76L249.76,33.27A30,30,0,0,1,256.05,32a30.64,30.64,0,0,1,6.14,1.21l192,80A16.1,16.1,0,0,1,464,128C464,338.91,331.93,449.68,262.13,478.77ZM384,224H371.88c-28.51,0-42.79-34.47-22.63-54.63l8.58-8.57a16,16,0,1,0-22.63-22.63l-8.57,8.58a31.32,31.32,0,0,1-22.4,9.43c-16.45,0-32.23-12.77-32.23-32.06V112a16,16,0,0,0-32,0v12.12c0,19.29-15.78,32.06-32.23,32.06a31.34,31.34,0,0,1-22.4-9.43l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H128a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.57a16,16,0,1,0,22.63,22.63l8.57-8.58a31.3,31.3,0,0,1,22.4-9.43c16.45,0,32.23,12.77,32.23,32.06V368a16,16,0,0,0,32,0V355.88c0-19.29,15.78-32.07,32.23-32.06a31.34,31.34,0,0,1,22.4,9.43l8.57,8.58a16,16,0,0,0,22.63-22.63l-8.58-8.57C329.09,290.47,343.37,256,371.88,256H384a16,16,0,0,0,0-32Zm-71.25,39.51A64.17,64.17,0,0,0,308,291.92c-1.23-.07-2.48-.1-3.73-.1a64.37,64.37,0,0,0-44.12,17.41c-1.48,1.37-2.87,2.81-4.19,4.29a64.18,64.18,0,0,0-48.15-21.7c-1.25,0-2.49,0-3.73.11A64.38,64.38,0,0,0,182.51,240,64.38,64.38,0,0,0,204,188.08c1.23.07,2.48.1,3.73.1A64.17,64.17,0,0,0,256,166.38a64.17,64.17,0,0,0,48.23,21.8c1.25,0,2.5,0,3.73-.1A64.38,64.38,0,0,0,329.49,240,64.11,64.11,0,0,0,312.75,263.51ZM240,208a16,16,0,1,0,16,16A16,16,0,0,0,240,208Z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Theo dõi COVID-19')}</span> : ''}
                    </NavLink>
                    <NavLink className={classes.categoryNavLink}
                        to="/workflow-management"
                        title={t('Quản lý công việc')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clipboard-list-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-clipboard-list-check fa-w-12 fa-3x"><path fill="currentColor" d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352zM112 328c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm168 8H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-153.8-65.6l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l37.1 37.4c1.9 2.1 5.3 2.1 7.4 0zM280 240h-77.6l-32.3 32H280c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Quản lý công việc')}</span> : ''}
                    </NavLink> */}
                </div>
                <div className={classes.category}>
                    {props.toggleSidebar ? (
                        <h5 className={classes.categoryHeading}>{t('Quản lý')}</h5>
                    ) : ''}
                    {/* <NavLink className={classes.categoryNavLink}
                        to="/article"
                        title={t('Tin tức')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-newspaper fa-w-18 fa-3x"><path fill="currentColor" d="M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48 48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178 16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96 400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224 0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Tin tức')}</span> : ''}
                    </NavLink>
                    <NavLink className={classes.categoryNavLink}
                        to="/product"
                        title={t('Sản phẩm')}
                    >
                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="box-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 512" className="svg-inline--fa fa-box-open fa-w-19 fa-3x"><path fill="currentColor" d="M606.4 143.8L557.5 41c-2.7-5.6-8.1-9-13.9-9C543 32 304 64 304 64S65 32 64.4 32c-5.8 0-11.2 3.5-13.9 9L1.6 143.8c-4.4 9.2.3 20.2 9.6 23l49.5 14.9V393c0 14.7 9.5 27.5 23 31l205.4 54.1c13 3.4 23.7 1.5 29.5 0L524.2 424c13.5-3.6 23-16.4 23-31V181.7l49.5-14.9c9.4-2.8 14-13.8 9.7-23zM73 65.3l180.9 24.3-57.1 99.8-159.9-48.1 36.1-76zm18.2 125.6C208.3 226.1 200.5 224 203.6 224c5.4 0 10.5-2.9 13.3-7.9l71.9-125.5V445L91.2 393V190.9zM516.8 393l-197.6 52V90.5L391.1 216c2.9 5 8 7.9 13.3 7.9 3.1 0-5 2.1 112.4-33.1V393zM411.3 189.3l-57.1-99.8L535 65.3l36.1 76-159.8 48z" className=""></path></svg>
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Sản phẩm')}</span> : ''}
                    </NavLink> */}
                </div>
            </div>
            <div className={classes.actions}>
                {props.toggleSidebar ? (
                    <>
                        <div className={classes.action}>
                            <select
                                defaultValue={props.language}
                                onChange={HandleChangeLanguage}
                                className={classes.headerSelectLanguage}
                            >
                                <option value={"vi"}>{t('Tiếng Việt')}</option>
                                <option value={"en"}>{t('Tiếng Anh')}</option>
                            </select>
                        </div>
                        <div className={classes.action}>
                            <span>{t('Chế độ tối')}</span>
                            <Switch
                                color="primary"
                                checked={props.toggleDarkMode}
                                onChange={handleChangeDarkMode}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    </>
                ) : ''}
                <div className={classes.action}>
                    <button className={classes.btnToggleSidebar} onClick={handleClickSidebar}>
                        {props.toggleSidebar ? (
                            <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-alt-from-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-alt-from-right fa-w-14 fa-3x"><path fill="currentColor" d="M448 76v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zm-96 218.9v-77.7c0-8.8-7.2-16-16-16H192v-93.9c0-7.1-8.6-10.7-13.6-5.7L36.7 244.7c-6.3 6.3-6.3 16.4 0 22.7l141.6 143.1c5 5 13.6 1.5 13.6-5.7v-93.9h144c8.9 0 16.1-7.2 16.1-16m32 0c0 26.5-21.5 48-48 48H224v61.9c0 35.6-43.1 53.4-68.2 28.3L14.1 290c-18.8-18.8-18.8-49.2 0-68L155.8 78.9C181 53.8 224 71.8 224 107.3v61.9h112c26.5 0 48 21.5 48 48v77.7z" className=""></path></svg>
                        ) : (
                            <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-alt-from-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-alt-from-left fa-w-14 fa-3x"><path fill="currentColor" d="M0 436V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-218.9v77.7c0 8.8 7.2 16 16 16h144v93.9c0 7.1 8.6 10.7 13.6 5.7l141.6-143.1c6.3-6.3 6.3-16.4 0-22.7l-141.6-143c-5-5-13.6-1.5-13.6 5.7v93.9H112c-8.8-.1-16 7.1-16 15.9m-32 0c0-26.5 21.5-48 48-48h112v-61.9c0-35.6 43.1-53.4 68.2-28.3L433.9 222c18.8 18.8 18.8 49.2 0 68L292.2 433.1c-25.2 25.2-68.2 7.2-68.2-28.3v-61.9H112c-26.5 0-48-21.5-48-48v-77.8z" className=""></path></svg>
                        )}
                        {props.toggleSidebar ? <span style={{ marginLeft: '10px' }}>{t('Thu gọn menu')}</span> : ''}
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);