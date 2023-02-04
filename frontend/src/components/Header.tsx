import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../App.css';
import {
  FormControl,
  Input,
  InputLabel,
  Modal,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import { setSeason } from '../redux/seasonSlice';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system';

const pages = ['Home', 'Calendar', 'Leagues'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AccountModal = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: '#bfcbc1',
  border: '2px solid #000',
  boxShadow: '24',
  p: '4',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  gap: '15px',
  borderRadius: '15px'
});

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const [openRegisterModal, setOpenRegisterModal] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClose = () => {
    setOpenLoginModal(false);
  };

  const handleRegisterClose = () => {
    setOpenRegisterModal(false);
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(setSeason(event.target.value as number));
  };

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

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: 'transparent' }}
      className="header"
    >
      <Container>
        <Modal open={openLoginModal} onClose={handleLoginClose}>
          <AccountModal>
            <Typography>Login window</Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={'password'}
            />
            <Box
              style={{ display: 'flex', justifyContent: 'end', color: 'white' }}
            >
              <Button onClick={() => setOpenLoginModal(false)}>Cancel</Button>
              <Button>Submit</Button>
            </Box>
          </AccountModal>
        </Modal>

        <Modal open={openRegisterModal} onClose={handleRegisterClose}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>

        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex'
              }
              // justifyContent: 'center'
            }}
          >
            {pages.map(page => (
              <Link
                to={`/${page}`}
                key={page}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
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
              // value={age}
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
              <MenuItem value={2015}>2015</MenuItem>
            </CustomSelect>
          </FormControl>
          <Button
            style={{ color: 'white' }}
            onClick={() => setOpenLoginModal(true)}
          >
            Login
          </Button>
          <Button
            style={{ color: 'white' }}
            onClick={() => setOpenRegisterModal(true)}
          >
            Register
          </Button>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
