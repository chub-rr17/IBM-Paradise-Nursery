import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { formatPrice, makeSxStyles } from "../../utils";
import { Button } from "../Button";

type OrderSummaryProps = {
  totalPrice: number;
  onCheckout: () => void;
};

const makeStyles = () =>
  makeSxStyles({
    row: {
      display: "flex",
      justifyContent: "space-between",
    },
    totalRow: {
      backgroundColor: "#e8e8e8",
      p: 2,
    },
    checkoutWrapper: {
      pt: 2,
    },
    greyText: {
      color: "#747474",
    },
    borderBottom: {
      borderBottom: "1px solid #e7e7e7",
      padding: 2,
    },
    orderBlock: {
        backgroundColor: "#efefef",
        border: "1px solid #e7e7e7",
    }
  });

const OrderSummary: FC<OrderSummaryProps> = ({ totalPrice, onCheckout }) => {
  const styles = makeStyles();

  return (
    <Box>
      <Box
        sx={styles.orderBlock}
      >
        <Box
          sx={styles.borderBottom}
        >
          <Typography variant="h6">Order Summary</Typography>
        </Box>
        <Box
          sx={styles.borderBottom}
        >
          <Box sx={styles.row}>
            <Typography variant="body2" sx={styles.greyText}>
              Subtotal
            </Typography>
            <Typography variant="body2">{formatPrice(totalPrice)}</Typography>
          </Box>
          <Box pt={1} sx={styles.row}>
            <Typography variant="body2" sx={styles.greyText}>
              Shipping
            </Typography>
            <Typography variant="body2">Free</Typography>
          </Box>
        </Box>
        <Box sx={[styles.row, styles.totalRow]}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">{formatPrice(totalPrice)}</Typography>
        </Box>
      </Box>
      <Box sx={styles.checkoutWrapper}>
        <Button onClick={onCheckout} title="Checkout" fullWidth />
      </Box>
    </Box>
  );
};

export default OrderSummary;
