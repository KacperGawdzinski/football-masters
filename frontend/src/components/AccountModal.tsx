import {
  Box,
  Button,
  Modal,
  styled,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/loginSlice';

const AccountBox = styled(Box)({
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

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
}

const AccountModal = (props: Props) => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');

  const sendAccountInfo = async () => {
    const response = await axios.post(
      `http://localhost:5000/${props.isRegister ? 'register' : 'login'}`,
      {
        login: loginInput,
        password: passwordInput
      }
    );

    if (response.status === 200) {
      dispatch(
        setLogin({
          login: loginInput,
          jwt: response.data.token as string
        })
      );
      props.setOpenModal(false);
    }
  };

  return (
    <Modal open={props.openModal} onClose={props.setOpenModal}>
      <AccountBox>
        <Typography>
          {props.isRegister ? 'Register' : 'Login'} window
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLoginInput(e.target.value)
          }
        />
        <TextField
          label="Password"
          variant="outlined"
          type={'password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordInput(e.target.value)
          }
        />
        <Box style={{ display: 'flex', justifyContent: 'end', color: 'white' }}>
          <Button onClick={() => props.setOpenModal(false)}>Cancel</Button>
          <Button onClick={() => sendAccountInfo()}>Submit</Button>
        </Box>
      </AccountBox>
    </Modal>
  );
};

export default AccountModal;
