import Container from '@material-ui/core/Container';
import trianglesLeft from '../libs/images/triangles-top.svg';
import trianglesRight from '../libs/images/triangles-bottom.svg';
import avatar from '../libs/images/avatar1.jpg';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// style
const topPadding = 120;

const useStyles = makeStyles({
    wrapper: {
        lineHeight: '1.4',
        fontFamily: props => props.btnPrint ? 'GoogleSans' : 'Time News Roman',
        backgroundColor: 'var(--background-page)',
        paddingTop: props => props.btnPrint ? `${topPadding}px` : '24px',
        paddingBottom: '24px',
        minHeight: '100vh',
        backgroundImage: props => props.btnPrint ? `url(${trianglesRight})` : `url(${trianglesLeft}), url(${trianglesRight})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: props => props.btnPrint ? 'right bottom' : 'left top, right bottom',
        color: 'var(--color-text-profile)',
        backgroundAttachment: props => props.btnPrint ? 'fixed' : '',
        fontSize: props => props.btnPrint ? '1.6rem' : '1.4rem',
        WebkitPrintColorAdjust: 'exact',
    },
    containerWrapper: {
        marginLeft: '-10px',
        marginRight: '-10px',
        display: 'flex'
    },
    wrapperLeft: {
        paddingLeft: '10px',
        paddingRight: '10px',
        flexBasis: '25%'
    },
    wrapperRight: {
        paddingLeft: '10px',
        paddingRight: '10px',
        flexBasis: '75%'
    },
    sidebar: {
        marginTop: props => !props.btnPrint ? '100px' : 0,
        borderRadius: '20px',
        position: 'sticky',
        top: '24px',
        left: 0,
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.20)'
    },
    main: {
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.20)',
        borderRadius: '20px'
    },
    section: {
        padding: props => props.btnPrint ? '20px' : '10px 20px',
        '&:nth-child(odd)': {
            backgroundColor: 'var(--background-section)',
        },
        '&:nth-child(even)': {
            backgroundColor: 'var(--color-background-section-secondary)',
        },
        '&:first-of-type': {
            borderRadius: '20px 20px 0 0',
        },
        '&:last-of-type': {
            borderRadius: '0 0 20px 20px',
        }
    },
    sidebarUser: {
        textAlign: 'center'
    },
    sidebarUserAvatar: {
        width: '180px',
        height: '180px',
        margin: '0 auto',
        borderRadius: '35px',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease',
        userSelect: 'none',
        marginTop: '-110px',
        boxShadow: props => props.btnPrint ? '0 2px 15px rgb(0 0 0 / 40%)' : '',
        '&.disable-margin': {
            marginTop: 0
        }
    },
    sidebarUserImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    sidebarUserName: {
        fontSize: props => props.btnPrint ? '3rem' : '2.6rem',
        fontFamily: 'Charm',
        fontWeight: 'bold',
        marginBottom: props => props.btnPrint ? '1.5rem' : '1rem',
        background: 'var(--color-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    sidebarUserNameBold: {
        fontWeight: 'bold',
    },
    sidebarUserPosition: {
        padding: '8px 16px',
        backgroundColor: 'var(--color-background-section-secondary)',
        borderRadius: '20px',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: props => props.btnPrint ? '1.5rem' : '1rem'
    },
    sidebarUserSocialMediaItem: {
        display: 'inline-block',
        '&:not(:first-child)': {
            marginLeft: '1.5rem'
        }
    },
    sidebarUserSocialMediaItemLink: {
        color: 'var(--color-text-profile)',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
    sidebarInfoFullItem: {
        display: 'flex',
        alignItems: 'center',
        '&:not(:first-child)': {
            marginTop: props => props.btnPrint ? '1.5rem' : '1rem'
        }
    },
    sidebarInfoFullItemLink: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--color-text-profile)',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
    sidebarInfoFullItemText: {
        marginLeft: '1rem'
    },
    sidebarInfoFullPrint: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '2rem',
        border: 'none',
        borderRadius: '20px',
        padding: '15px 30px',
        background: 'var(--color-primary)',
        color: 'rgb(255, 255, 255)',
        fontSize: '1.6rem',
        fontFamily: props => props.btnPrint ? 'GoogleSans-Bold' : '',
    },
    sidebarInfoFullPrintText: {
        marginLeft: '1rem'
    },
    sectionHeading: {
        fontSize: props => props.btnPrint ? '2.4rem' : '1.6rem',
        fontFamily: props => props.btnPrint ? 'GoogleSans-Bold' : '',
        marginBottom: props => props.btnPrint ? '2rem' : '0.6rem',
        position: 'relative',
        textTransform: 'uppercase'
    },
    sectionContent: {
        '& + &': {
            marginTop: '20px'
        }
    },
    ulListStyle: {
        listStyle: 'unset',
        listStylePosition: 'inside'
    },
    ulListStyleItem: {
        '&:not(:first-child)': {
            marginTop: '1rem'
        }
    },
    heading: {
        marginBottom: props => props.btnPrint ? '1.5rem' : '1rem',
    },
    headingTop: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.3rem'
    },
    headingTitle: {
        color: 'var(--color-primary)',
        fontFamily: props => props.btnPrint ? 'GoogleSans-Bold' : '',
    },
    headingSubtitle: {
        fontSize: '1.2rem'
    },
    headingPosition: {
        fontStyle: 'italic',
        fontSize: props => props.btnPrint ? '1.4rem' : '1.2rem'
    },
    content: {
        '& + &': {
            marginTop: '10px',
        },
        'p:not(:first-of-type)': {
            marginTop: '3px'
        }
    },
    briefContent: {
        '&:last-of-type': {
            marginBottom: '10px'
        }
    },
    link: {
        color: 'var(--color-text-primary)',
        '&:hover': {
            color: 'var(--color-primary)',
        }
    }
})


const printCV = () => {
    const printArea = window.open('print-profile', window.location.href, "width=820,height=1400");
    printArea.moveTo(20, 20);
}

const Profile = props => {
    const { t } = useTranslation();
    const classes = useStyles(props);

    useEffect(() => {
        const appEle = document.querySelector('.app');
        const AvatarEle = document.querySelector('#profile-avatar');
        if (appEle.scrollTop >= topPadding) {
            AvatarEle.classList.add('disable-margin');
        } else {
            AvatarEle.classList.remove('disable-margin');
        }
        function DisableAvatarMargin() {
            if (this.scrollTop >= topPadding) {
                AvatarEle.classList.add('disable-margin');
            } else {
                AvatarEle.classList.remove('disable-margin');
            }
        }
        appEle.addEventListener('scroll', DisableAvatarMargin);
    })

    return (
        <div className={classes.wrapper}>
            <Container maxWidth="lg">
                <div className={classes.containerWrapper}>
                    <div className={classes.wrapperLeft}>
                        <div className={classes.sidebar}>
                            <div className={classes.section}>
                                <div className={classes.sidebarUser}>
                                    <div>
                                        <div className={classes.sidebarUserAvatar} id="profile-avatar">
                                            <img className={classes.sidebarUserImg} src={avatar} alt="avatar" />
                                        </div>
                                        <div className={classes.sidebarUserName}>Ngô Quang Mạnh</div>
                                        <div className={classes.sidebarUserPosition}>Frontend Developer</div>
                                        <ul className="">
                                            <li className={classes.sidebarUserSocialMediaItem}>
                                                <a className={classes.sidebarUserSocialMediaItemLink} href="https://www.facebook.com/manhnq097" rel="noreferrer" target="_blank">
                                                    <svg width="14px" height="14px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10 fa-3x"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" className=""></path></svg>
                                                </a>
                                            </li>
                                            <li className={classes.sidebarUserSocialMediaItem}>
                                                <a className={classes.sidebarUserSocialMediaItemLink} href="# ">
                                                    <svg width="14px" height="14px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-twitter fa-w-16 fa-3x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" className=""></path></svg>
                                                </a>
                                            </li>
                                            <li className={classes.sidebarUserSocialMediaItem}>
                                                <a className={classes.sidebarUserSocialMediaItemLink} href="# ">
                                                    <svg width="14px" height="14px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 fa-3x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" className=""></path></svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section}>
                                <ul className={classes.sidebarInfoFull}>
                                    <li className={classes.sidebarInfoFullItem}>
                                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="venus-mars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-venus-mars fa-w-18 fa-3x"><path fill="currentColor" d="M288 208c0-79.5-64.5-144-144-144S0 128.5 0 208c0 71.4 51.9 130.6 120 142v58H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-58c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96zM576 12v63c0 10.7-12.9 16-20.5 8.5L541 69l-55.6 55.6c16.8 23.5 26.6 52.3 26.6 83.4 0 79.5-64.5 144-144 144-33.7 0-64.6-11.6-89.2-30.9 10.4-12.4 19.1-26.1 25.8-41 16.9 14.9 39.1 24 63.4 24 52.9 0 96-43.1 96-96s-43.1-96-96-96c-24.3 0-46.5 9.1-63.4 24-6.7-14.9-15.4-28.7-25.8-41C303.4 75.6 334.3 64 368 64c31.1 0 59.9 9.9 83.4 26.6L507 35l-14.5-14.5C484.9 12.9 490.3 0 501 0h63c6.6 0 12 5.4 12 12z" className=""></path></svg>
                                        <span className={classes.sidebarInfoFullItemText}>{t('Nam')}</span>
                                    </li>
                                    <li className={classes.sidebarInfoFullItem}>
                                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="birthday-cake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-birthday-cake fa-w-14 fa-3x"><path fill="currentColor" d="M192 64c0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40-32-14.25-32-32zm160 32c17.75 0 32-13.5 32-40S364 0 352 0c0 41-32 33-32 64 0 17.75 14.25 32 32 32zm96 176v240H0V272c0-26.5 21.5-48 48-48h24V112h48v112h80V112h48v112h80V112h48v112h24c26.5 0 48 21.5 48 48zm-400 6v56.831c8.352 7 15.27 13.169 26.75 13.169 25.378 0 30.13-32 74.75-32 43.974 0 49.754 32 74.5 32 25.588 0 30.061-32 74.75-32 44.473 0 49.329 32 74.75 32 11.258 0 18.135-6.18 26.5-13.187v-56.805a6 6 0 0 0-6-6L54 272a6 6 0 0 0-6 6zm352 186v-80.87c-7.001 2.914-15.54 4.87-26.5 4.87-44.544 0-49.389-32-74.75-32-25.144 0-30.329 32-74.75 32-43.974 0-49.755-32-74.5-32-25.587 0-30.062 32-74.75 32-11.084 0-19.698-1.974-26.75-4.911V464h352zM96 96c17.75 0 32-13.5 32-40S108 0 96 0c0 41-32 33-32 64 0 17.75 14.25 32 32 32z" className=""></path></svg>
                                        <span className={classes.sidebarInfoFullItemText}>21 / 10 / 1997</span>
                                    </li>
                                    <li className={classes.sidebarInfoFullItem}>
                                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-3x"><path fill="currentColor" d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z" className=""></path></svg>
                                        <span className={classes.sidebarInfoFullItemText}>{t('Đông Anh')}, {t('Hà Nội')}</span>
                                    </li>
                                    {props.btnPrint ? (
                                        <>
                                            <li className={classes.sidebarInfoFullItem}>
                                                <a className={classes.sidebarInfoFullItemLink} href="mailto:manhnq097@gmail.com">
                                                    <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16 fa-3x"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" className=""></path></svg>
                                                    <span className={classes.sidebarInfoFullItemText}>manhnq097@gmail.com</span>
                                                </a>
                                            </li>
                                            <li className={classes.sidebarInfoFullItem}>
                                                <a className={classes.sidebarInfoFullItemLink} href="tel:0867752667">
                                                    <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="mobile-android" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-mobile-android fa-w-10 fa-3x"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 464H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6zm-70-32h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z" className=""></path></svg>
                                                    <span className={classes.sidebarInfoFullItemText}>+84(0)8677-52667</span>
                                                </a>
                                            </li>
                                            <li className={classes.sidebarInfoFullItem}>
                                                <a className={classes.sidebarInfoFullItemLink} href="https://join.skype.com/invite/kzIIxQJMYP8v" rel="noreferrer" target="_blank">
                                                    <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="skype" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-skype fa-w-14 fa-3x"><path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" className=""></path></svg>
                                                    <span className={classes.sidebarInfoFullItemText}>live:manhnq097</span>
                                                </a>
                                            </li>
                                        </>
                                    ) : ''}
                                </ul>
                                {props.btnPrint ? (
                                    <button className={classes.sidebarInfoFullPrint} onClick={() => printCV()}>
                                        <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="print" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-print fa-w-16 fa-3x"><path fill="currentColor" d="M400 264c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm32-88V99.88c0-12.73-5.06-24.94-14.06-33.94l-51.88-51.88c-9-9-21.21-14.06-33.94-14.06H110.48C93.64 0 80 14.33 80 32v144c-44.18 0-80 35.82-80 80v128c0 8.84 7.16 16 16 16h64v96c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-96h64c8.84 0 16-7.16 16-16V256c0-44.18-35.82-80-80-80zM128 48h192v48c0 8.84 7.16 16 16 16h48v64H128V48zm256 416H128v-64h256v64zm80-112H48v-96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v96z" className=""></path></svg>
                                        <span className={classes.sidebarInfoFullPrintText}>{t('In CV')}</span>
                                    </button>
                                ) : ''}
                            </div>
                            {!props.btnPrint ? (
                                <div className={classes.section}>
                                    <ul className={classes.sidebarInfoFull}>
                                        <li className={classes.sidebarInfoFullItem}>
                                            <a className={classes.sidebarInfoFullItemLink} href="https://manhnq097.github.io/" rel="noreferrer" target="_blank">
                                                <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-link fa-w-16 fa-3x"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" className=""></path></svg>
                                                <span className={classes.sidebarInfoFullItemText}>manhnq097.github.io</span>
                                            </a>
                                        </li>
                                        <li className={classes.sidebarInfoFullItem}>
                                            <a className={classes.sidebarInfoFullItemLink} href="mailto:manhnq097@gmail.com">
                                                <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16 fa-3x"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" className=""></path></svg>
                                                <span className={classes.sidebarInfoFullItemText}>manhnq097@gmail.com</span>
                                            </a>
                                        </li>
                                        <li className={classes.sidebarInfoFullItem}>
                                            <a className={classes.sidebarInfoFullItemLink} href="tel:0867752667">
                                                <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="mobile-android" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-mobile-android fa-w-10 fa-3x"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 464H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6zm-70-32h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z" className=""></path></svg>
                                                <span className={classes.sidebarInfoFullItemText}>+84(0)8677-52667</span>
                                            </a>
                                        </li>
                                        <li className={classes.sidebarInfoFullItem}>
                                            <a className={classes.sidebarInfoFullItemLink} href="https://join.skype.com/invite/kzIIxQJMYP8v" rel="noreferrer" target="_blank">
                                                <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="skype" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-skype fa-w-14 fa-3x"><path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" className=""></path></svg>
                                                <span className={classes.sidebarInfoFullItemText}>live:manhnq097</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            ) : ''}
                            {!props.btnPrint ? (
                                <div className={classes.section}>
                                    <h3 className={classes.sectionHeading}>{t('Skill')}</h3>
                                    <div className={classes.sectionContent}>
                                        <ul className={classes.ulListStyle}>
                                            <li className={classes.ulListStyleItem}>HTML, CSS</li>
                                            <li className={classes.ulListStyleItem}>Bootstrap</li>
                                            <li className={classes.ulListStyleItem}>Javascript Vanilla</li>
                                            <li className={classes.ulListStyleItem}>Jquery</li>
                                            <li className={classes.ulListStyleItem}>ReactJS</li>
                                            <li className={classes.ulListStyleItem}>GitHub, SVN</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : ''}
                        </div>
                    </div>
                    <div className={classes.wrapperRight}>
                        <div className={classes.main}>
                            <div className={classes.section}>
                                <h3 className={classes.sectionHeading}>{t('Mục tiêu')}</h3>
                                <div className={classes.sectionContent}>
                                    <div className={classes.content}>
                                        <p> - Mục tiêu ngắn hạn: Làm quen với môi trường mới, trở thành nhân viên chính thức, rèn luyên kỹ năng xử lý công việc hiệu quả, chính xác và nhanh chóng</p>
                                        <p> - Mục tiêu dài hạn: Sử dụng những kinh nghiệm đã có của bản thân, công hiến hết mình cho công ty, đem lại hiệu quả công việc cao</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section}>
                                <h3 className={classes.sectionHeading}>{t('Học vấn')}</h3>
                                <div className={classes.sectionContent}>
                                    <div className={classes.heading}>
                                        <div className={classes.headingTop}>
                                            <h4 className={classes.headingTitle}>{t('Cao Đẳng Nghề Công Nghệ Cao Hà Nội')}</h4>
                                            <div className={classes.headingSubtitle}>09/2015 - 07/2019</div>
                                        </div>
                                        <div className={classes.headingBottom}>
                                            <div className={classes.headingPosition}>{t('Sinh viên')}</div>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <p> - {t('Chuyên ngành')}: {t('Công nghệ thông tin')} - {t('Ứng dụng phần mềm')} ({t('Đã hoàn thành')})</p>
                                        <p> - GPA: ... ({t('Xếp loại')}: {t('Khá')})</p>
                                    </div>
                                </div>
                            </div>
                            {props.btnPrint ? (
                                <div className={classes.section}>
                                    <h3 className={classes.sectionHeading}>{t('Kỹ năng')}</h3>
                                    <div className={classes.sectionContent}>
                                        <ul className={classes.ulListStyle}>
                                            <Grid container spacing={2}>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>HTML, CSS</li>
                                                </Grid>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>Bootstrap</li>
                                                </Grid>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>Javascript Vanilla</li>
                                                </Grid>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>Jquery</li>
                                                </Grid>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>ReactJS</li>
                                                </Grid>
                                                <Grid item md={6} xs={6}>
                                                    <li className={classes.ulListStyleItem}>GitHub, SVN</li>
                                                </Grid>
                                            </Grid>
                                        </ul>
                                    </div>
                                </div>
                            ) : ''}
                            <div className={classes.section}>
                                <h3 className={classes.sectionHeading}>{t('Kinh nghiệm')}</h3>
                                <div className={classes.sectionContent}>
                                    <div className={classes.heading}>
                                        <div className={classes.headingTop}>
                                            <h4 className={classes.headingTitle}>Công Ty Cổ Phần Truyền Thông Văn Hoá Việt</h4>
                                            <div className={classes.headingSubtitle}>07/2019 - {t('Hiện tại')}</div>
                                        </div>
                                        <div className={classes.headingBottom}>
                                            <div className={classes.headingPosition}>Frontend Developer</div>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <ul className={classes.ulListStyle}>
                                            <li className={classes.ulListStyleItem}>
                                                Sử dụng framework của công ty (colombo) để triển khai các dự án
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Thu thập ý kiến phản hồi và xây dựng các hướng giải quyết cho người sử dụng và khách hàng
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Triển khai giao diện HTML/CSS Javascript theo yêu cầu của khách hàng trên hệ thống website xây dựng sẵn
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Phối hợp với các back-end developers và web designers để cải thiện tính khả dụng của các dự án
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Phát triển version 2 của framework colombo
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section}>
                                <h3 className={classes.sectionHeading}>{t('Dự án')}</h3>
                                <div className={classes.sectionContent}>
                                    <div className={classes.heading}>
                                        <div className={classes.headingTop}>
                                            <h4 className={classes.headingTitle}>{t('Tờ khai y tế')}</h4>
                                            <div className={classes.headingSubtitle}>
                                                <a className={classes.link} href="https://tokhaiyte.vn"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    style={{ color: 'var(--color-primary)' }}
                                                >
                                                    https://tokhaiyte.vn
                                                </a>
                                            </div>
                                        </div>
                                        <div className={classes.headingBottom}>
                                            <div className={classes.headingPosition}>Frontend Developer</div>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <div className={classes.briefContent}>
                                            Dự án làm ứng dụng website, phonegap quản lý khai báo. Giúp bộ y tế, cửa khẩu, CDC tỉnh có thể kiểm soát hành khách nhập cảnh, hành khách di chuyển trong nước và tờ khai sức khoẻ của người dân.
                                        </div>
                                        <ul className={classes.ulListStyle}>
                                            <li className={classes.ulListStyleItem}>
                                                Phát triển frontend và tính năng ứng dụng (v1, v2, v4)
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Phối hợp với các BA, QA, back-end developers để khắc phục những lỗi luồng, backend
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={classes.sectionContent}>
                                    <div className={classes.heading}>
                                        <div className={classes.headingTop}>
                                            <h4 className={classes.headingTitle}>Mạng xã hội du lịch</h4>
                                            <div className={classes.headingSubtitle}>
                                                <a className={classes.link} href="https://travelbook.vn"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    style={{ color: 'var(--color-primary)' }}
                                                >
                                                    https://travelbook.vn
                                                </a>
                                            </div>
                                        </div>
                                        <div className={classes.headingBottom}>
                                            <div className={classes.headingPosition}>Frontend Developer</div>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <div className={classes.briefContent}>
                                            - Dự án làm ứng dụng website mạng xã hội giúp tỉnh, thành phố và các địa điểm lưu trú (khách sạn, nhà trọ) quản lý cơ sở lưu trú và khách lưu trú.
                                        </div>
                                        <div className={classes.briefContent}>
                                            - Khách lưu trú có thể sử dụng như một mạng xã hội để giao lưu, tìm bạn bè. Ứng dụng cũng giúp tạo lịch trình, đăng ký dịch vụ lưu trú, ăn uống và nghỉ dưỡng.
                                        </div>
                                        <ul className={classes.ulListStyle}>
                                            <li className={classes.ulListStyleItem}>
                                                Phát triển frontend và tính năng ứng dụng
                                            </li>
                                            <li className={classes.ulListStyleItem}>
                                                Phối hợp với các BA, QA, designers và back-end developers để cải thiện tính khả dụng
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Profile;