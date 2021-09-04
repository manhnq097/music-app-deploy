import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        borderRadius: 'var(--border-radius)',
        backgroundColor: 'var(--background - section)',
        boxShadow: 'var(--box-shadow)',
        padding: '20px'
    },
    cardHeading: {
        marginBbottom: '20px',
        fontSize: '18px',
        lineHeight: 1.4,
        fontWeight: 'bold'
    },
    cardBody: {
        fontSize: '18px',
        lineHeight: 1.4,
        fontWeight: 'bold',
        flexGrow: 1
    }

})

const Card = props => {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            {props.title ? (
                <div className={classes.cardHeading}>{props.title}</div>
            ) :
                ''
            }
            {props.children ? (
                <div className={classes.cardBody}>
                    {props.children}
                </div>
            ) :
                ''
            }
        </div>
    )
}

export default Card;