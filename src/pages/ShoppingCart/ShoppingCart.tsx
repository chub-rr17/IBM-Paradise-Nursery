import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

import { OrderSummary } from "../../components/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectProducts,
  selectTotalPrice,
  updateQuantity,
} from "../../store/slices/cartSlice";
import { ProductTable } from "../../components/ProductTable";
import { ProductWithQuantity } from "../../types";
import { Button } from "../../components/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

const ShoppingCart: FC = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const products = useSelector(selectProducts);

  const handleOnDelete = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleOnAddUnit = (product: ProductWithQuantity) => {
    dispatch(updateQuantity({ ...product, quantity: product.quantity + 1 }));
  };

  const handleOnSubtractUnit = (product: ProductWithQuantity) => {
    dispatch(updateQuantity({ ...product, quantity: product.quantity - 1 }));
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        backgroundColor: "#fff",
        paddingTop: "64px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" align="center" mt={10}>
          Your Cart
        </Typography>
        <Button>
          <Link to={ROUTES.ProductListing}>
            <Typography variant="body1">Continue Shopping</Typography>
            <ShoppingCartIcon sx={{ pl: 1 }} />
          </Link>
        </Button>
      </Box>
      <Grid
        container
        mt={5}
        sx={{
          padding: 5,
        }}
        spacing={3}
      >
        <Grid xs={8} item>
          <ProductTable
            products={products}
            onDeleteItem={handleOnDelete}
            onAddUnit={handleOnAddUnit}
            onSubtractUnit={handleOnSubtractUnit}
          />
        </Grid>
        <Grid xs={4} item>
          <OrderSummary
            totalPrice={totalPrice}
            onCheckout={() => alert("Coming soon!")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
