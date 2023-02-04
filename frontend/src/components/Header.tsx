import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../App.css';
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { Link } from 'react-router-dom';
import { setSeason } from '../redux/seasonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { RootState } from '../redux/store';
import AccountModal from './AccountModal';
import { setLogin } from '../redux/loginSlice';

const pages = ['Home', 'Calendar', 'Leagues'];
const settings = ['Profile', 'Account', 'Logout'];

const CustomSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red'
    },
    '&:hover fieldset': {
      borderColor: 'yellow'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green'
    },
    color: 'white',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(228, 219, 233, 0.25)'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(228, 219, 233, 0.25)'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(228, 219, 233, 0.25)'
    },
    '.MuiSvgIcon-root ': {
      fill: 'white !important'
    },
    '&.Mui-selected': { color: '#ffffff' }
  },
  color: 'white'
}));

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login.login);

  const [openModal, setOpenModal] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e: Event | React.SyntheticEvent) => {
    if (e) {
      const element = e.target as HTMLElement;
      const option = element.innerText;

      if (option === 'Logout') {
        dispatch(setLogin({ login: '', jwt: '' }));
      }
    }

    setAnchorElUser(null);
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(setSeason(event.target.value as number));
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: 'transparent' }}
      className="header"
    >
      <Container>
        <AccountModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          isRegister={isRegister}
        />
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map(page => (
              <Link
                to={`/${page}`}
                key={page}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  sx={{
                    my: 2,
                    mx: 5,
                    color: 'white',
                    display: 'block',
                    fontSize: 18
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <FormControl
            style={{
              width: '200px',
              marginRight: '25px'
            }}
          >
            <InputLabel sx={{ color: 'white' }} id="demo-simple-select-label">
              Season
            </InputLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={2022}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
              <MenuItem value={2016}>2016</MenuItem>
            </CustomSelect>
          </FormControl>
          {login ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={login.toUpperCase()}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button
                style={{ color: 'white' }}
                onClick={() => {
                  setIsRegister(false);
                  setOpenModal(true);
                }}
              >
                Login
              </Button>
              <Button
                style={{ color: 'white' }}
                onClick={() => {
                  setIsRegister(true);
                  setOpenModal(true);
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
