import './aromashop.scss';
import Container from '@material-ui/core/Container';
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from './images/logo.png';
import Grid from '@material-ui/core/Grid';
import TitleHeading from '../../components/TitleHeading';
import Category from './components/Category';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';

const WebsiteECommerce = props => {
    const { t } = useTranslation();
    const { location: { pathname } } = props;
    const pathnames = pathname.split("/").filter(x => x);
    const pathHome = pathnames[0];
    return (
        <div className="aromashop">
            <div className="header">
                <Container maxWidth="lg">
                    <div className="header-section">
                        <div className="header-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="header-menu">
                            <ul className="header-menu__list">
                                <li className="header-menu__item">
                                    <NavLink exact to={'/' + pathHome} className="header-menu__link">
                                        {t('Trang chủ')}
                                    </NavLink>
                                </li>
                                <li className="header-menu__item">
                                    <NavLink to={'/' + pathHome + '/product'} className="header-menu__link">{t('Sản phẩm')}</NavLink>
                                </li>
                                <li className="header-menu__item">
                                    <NavLink to={'/' + pathHome + '/news'} className="header-menu__link">
                                        {t('Tin tức')}
                                    </NavLink>
                                </li>
                                <li className="header-menu__item">
                                    <NavLink to={'/' + pathHome + '/contact'} className="header-menu__link">
                                        {t('Liên hệ')}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="header-action">
                            <NavLink to={'/' + pathHome + '/cart'} className="header-action__link">
                                <svg width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z" className=""></path></svg>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="main">
                <Switch>
                    <Route exact path={'/' + pathHome}>
                        <Home />
                    </Route>
                    <Route exact path={'/' + pathHome + '/product'}>
                        Sản phẩm
                    </Route>
                    <Route path={'/' + pathHome + '/news'}>
                        Tin tức
                    </Route>
                    <Route path={'/' + pathHome + '/contact'}>
                        Liên hệ
                    </Route>
                    <Route path={'/' + pathHome + '/cart'}>
                        Giỏ hàng
                    </Route>
                    <Route path={'/' + pathHome + '/product/:productId'}>
                        <DetailProduct />
                    </Route>
                </Switch>
            </div>
            <div className="footer">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={4} style={{ color: '#7b838a' }}>
                            <TitleHeading title="Về chúng tôi"
                                fontSize="36px"
                                marginBottom="28px"
                                color="#FFFFFF"
                            />
                            <p style={{ marginBottom: '20px' }}> So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.</p>
                            <p> So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved</p>
                        </Grid>
                        <Grid item md={2}>
                            <TitleHeading title="Liên kết"
                                fontSize="18px"
                                marginBottom="28px"
                                color="#FFFFFF"
                            />
                            <Category />
                        </Grid>
                        <Grid item md={2}>
                            <TitleHeading title="Thư viện"
                                fontSize="18px"
                                marginBottom="28px"
                                color="#FFFFFF"
                            />
                            <Gallery />
                        </Grid>
                        <Grid item md={4}>
                            <TitleHeading title="Contact Us"
                                fontSize="18px"
                                marginBottom="28px"
                                color="#FFFFFF"
                            />
                            <ContactUs />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div >
    )
}

export default WebsiteECommerce;