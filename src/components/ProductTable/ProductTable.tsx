import { FC } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";

import { selectProducts } from "../../store/slices/cartSlice";
import { makeSxStyles, formatPrice } from "../../utils";
import { ProductWithQuantity } from "../../types";

const makeStyles = () =>
  makeSxStyles({
    tableHead: {
      borderBottom: "1px solid #9e9e9e",
      color: "#9e9e9e",
    },
    row: {
      alignItems: "center",
    },
    productColumn: {
      alignItems: "center",
      display: "flex",
      gap: 2,
    },
  });

type ProductTable = {
  products: ProductWithQuantity[];
  onDeleteItem: (id: number) => void;
  onAddUnit: (product: ProductWithQuantity) => void;
  onSubtractUnit: (product: ProductWithQuantity) => void;
};

const ProductTable: FC<ProductTable> = ({
  onDeleteItem,
  onAddUnit,
  onSubtractUnit,
}) => {
  const products = useSelector(selectProducts);
  const styles = makeStyles();

  return (
    <Grid>
      <Grid container sx={styles.tableHead}>
        <Grid xs={6}>
          <Typography>PRODUCT</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>PRICE</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>QUANTITY</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>TOTAL</Typography>
        </Grid>
      </Grid>
      {products.map((productWithQuantity) => {
        const { product, quantity } = productWithQuantity;
        const { id, image, name, price } = product;

        return (
          <Grid container key={id} sx={styles.row}>
            <Grid xs={6} item sx={styles.productColumn}>
              <Box component="img" src={image} width={100} height={100} />
              <Typography>{name}</Typography>
            </Grid>
            <Grid xs={2} item>
              {formatPrice(price)}
            </Grid>
            <Grid xs={2} item>
              <Button
                onClick={() => onSubtractUnit(productWithQuantity)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              {quantity}
              <Button onClick={() => onAddUnit(productWithQuantity)}>+</Button>
            </Grid>
            <Grid xs={2} item>
              {formatPrice(price * quantity)}
              <Button onClick={() => onDeleteItem(id)}>X</Button>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductTable;
