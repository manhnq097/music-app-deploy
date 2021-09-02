import './UserAccount.scss';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Avatar from '../../images/avatar.jpg';

import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const UserAccount = props => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderProfileMenu = (
    <div className="profile-menu">
      <Menu anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className="profile-menu"
      >
        <MenuItem onClick={handleMenuClose}>
          <Brightness2Icon />
          <span >{t('Dark mode')}</span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/setting">
            <SettingsIcon fontSize="small" />
            <span>{t('Setting')}</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );

  return (
    <>
      <button className="user-account" title="Manh Ngo" onClick={handleProfileMenuOpen}>
        <div className="user-account__left">
          <h4 className="user-account__name">{props.name ? props.name : 'UserName'}</h4>
          <div className="user-account__role">{props.role ? props.role : 'Member'}</div>
        </div>
        <div className="user-account__right">
          <img className="user-account__avatar" src={props.avatar ? props.avatar : Avatar} alt={props.name ? props.name : 'Profile'} />
        </div>
      </button>
      {renderProfileMenu}
    </>

  )
}

export default UserAccount;