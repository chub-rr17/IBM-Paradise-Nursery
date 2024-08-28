import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ROUTES } from "../../routes/constants";
import { selectQuantity } from "../../store/slices/cartSlice";
import { makeSxStyles } from "../../utils";

type NavbarLinkProps = {
  label: string;
  route: string;
};

const NavbarLink: FC<NavbarLinkProps> = ({ route, label }) => (
  <MenuItem>
    <Link to={route}>
      <Typography textAlign="center">{label}</Typography>
    </Link>
  </MenuItem>
);

const makeStyles = () =>
  makeSxStyles({
    appBar: {
      backgroundColor: "#000",
    },
    linkOverride: {
      a: {
        color: "#fff",
        textDecoration: "none",
      },
    },
  });

const Navbar: FC = () => {
  const styles = makeStyles();
  const quantity = useSelector(selectQuantity);

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar disableGutters sx={styles.linkOverride}>
        <Box display="flex" flexGrow={1}>
          <NavbarLink route={ROUTES.Landing} label="Home" />
          <NavbarLink route={ROUTES.ProductListing} label="Product Listing" />
          <NavbarLink route={ROUTES.ShoppingCart} label="Shopping Cart" />
        </Box>
        <Box flexGrow={0}>
          <Link to={ROUTES.ShoppingCart}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
