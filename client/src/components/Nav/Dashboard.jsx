import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from 'react-redux'
import { deleteData } from '../../utils/localStorage';
import { signoutAccount } from '../../redux/Auth/action';
import { useNavigate } from 'react-router-dom';


export default function PositionedMenu() {
  
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const { user } = useSelector((state) => state.isAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);

  };

  const handleSignOut = () => {
    deleteData("user");
    dispatch(signoutAccount(navigate));
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"white"}}
      >
      {user?.firstName}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose(); handleSignOut()}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
