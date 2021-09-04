import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    breadcrumbs: {
        display: 'flex',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
    },
    breadcrumb: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },
    breadcrumbLink: {
        color: 'var(--color-text)',
        '&:hover': {
            color: 'var(--color-primary)'
        }
    },
    breadcrumbSeparator: {
        marginLeft: '6px',
        userSelect: 'none',
        marginRight: '6px',
    },
    breadcrumbTitle: {
        fontSize: '24px',
        lineHeight: '1.2',
        color: 'var(--color-primary)',
    }
})

const Breadcrumb = props => {
    const { t } = useTranslation();
    const { history, location: { pathname } } = props;
    const pathnames = pathname.split("/").filter(x => x);
    const classes = useStyles();
    return (
        <ul className={classes.breadcrumbs}>
            {pathnames.length > 0 ? (
                <li className={classes.breadcrumb}>
                    <a className={classes.breadcrumbLink} href="# " onClick={() => history.push("/")} title={t('Profile')}>{t('Profile')}</a>
                    <span className={classes.breadcrumbSeparator}>
                        <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" className=""></path></svg>
                    </span>
                </li>
            ) : (
                ''
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                name = name.charAt(0).toUpperCase() + name.slice(1);
                return isLast ? (
                    <li className={classes.breadcrumbTitle}>
                        <span>{t(name)}</span>
                    </li>
                ) : (
                    <li className={classes.breadcrumb} key={index}>
                        <a className={classes.breadcrumbLink} href="# " onClick={() => history.push(routeTo)} title={t('Profile')}>{t(name)}</a>
                        <span className={classes.breadcrumbSeparator}>
                            <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" className=""></path></svg>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default withRouter(Breadcrumb);
