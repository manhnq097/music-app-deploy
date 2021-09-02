import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contactUs: {

  },
  contactItem: {
    display: 'flex',
    '&:not(:first-child)': {
      marginTop: '15px'
    }
  },
  contactIcon: {
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '28px',
    height: '28px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '50%',
    color: '#FFFFFF'
  },
  contactTitle: {
    color: '#FFFFFF',
    marginBottom: '10px'
  },
  contactContent: {
    color: '#7b838a',
  }
})

function ContactUs() {
  const classes = useStyles();
  return (
    <ul className={classes.contactUs}>
      <li className={classes.contactItem}>
        <div className={classes.contactIcon}>
          <svg width="15px" heigt="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-location-arrow fa-w-16 fa-3x"><path fill="currentColor" d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" className=""></path></svg>
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.contactTitle}>
            Địa chỉ
          </div>
          <div className={classes.contactContent}>
            Cầu Giấy, Hà Nội
          </div>
        </div>
      </li>
      <li className={classes.contactItem}>
        <div className={classes.contactIcon}>
          <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-phone-alt fa-w-16 fa-3x"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" className=""></path></svg>
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.contactTitle}>
            Số điện thoại
          </div>
          <div className={classes.contactContent}>
            <p>+84 12 456 6789</p>
            <p>+84 98 765 4321</p>
          </div>
        </div>
      </li>
      <li className={classes.contactItem}>
        <div className={classes.contactIcon}>
          <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16 fa-3x"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" className=""></path></svg>
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.contactTitle}>
            Email
          </div>
          <div className={classes.contactContent}>
            <p>contact@domain.com</p>
            <p>contact2@domain.com</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ContactUs
