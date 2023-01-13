import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const BreadcrumbsLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  ':hover': {
    textDecoration: 'underline'
  }
});

export default BreadcrumbsLink;
