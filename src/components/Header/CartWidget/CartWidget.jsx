import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Badge from '@mui/material/Badge';

import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartWidget(){

  const { getTotalItemInCart } = useContext(CartContext)

    return (
      <Link to="/cart">
        <button type="button" className="hover:scale-110 ease-in-out duration-300 p-1 px-3 text-xl text-gray-500 hover:text-black">
          <StyledBadge badgeContent={getTotalItemInCart()} color="warning">
            <LocalMallRoundedIcon />
          </StyledBadge>
        </button>
      </Link>
    )
}

export default CartWidget