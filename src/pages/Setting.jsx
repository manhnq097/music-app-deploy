import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../components/Breadcrumb';
import Container from '@material-ui/core/Container';

const Setting = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="layout-main__breadcrum"><Breadcrumb /></div>
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card title={t('Change language')}>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card title={t('Change theme')}>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Setting;