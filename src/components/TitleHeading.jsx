import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titleHeading: {
    fontFamily: 'GoogleSans-Bold',
    marginBottom: props => props.marginBottom ? props.marginBottom : '10px',
    fontSize: props => props.fontSize ? props.fontSize : '18px',
    color: props => props.color ? props.color : ''
  }
})
const TitleHeading = props => {
  const classes = useStyles(props);

  return (
    <h2 className={classes.titleHeading}>
      {props.title ? props.title : 'Title'}
    </h2>
  )
}

export default TitleHeading;