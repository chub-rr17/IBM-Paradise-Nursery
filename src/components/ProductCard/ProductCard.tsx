import { FC } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button } from "../Button";
import { Product } from "../../types";
import { formatPrice, makeSxStyles } from "../../utils";

type ProductCardProps = {
  product: Product;
  onaddItem: (product: Product) => void;
  isVertical?: boolean;
  disabled?: boolean;
};

const makeStyles = (isVertical: boolean) =>
  makeSxStyles({
    card: {
      backgroundColor: "transparent",
      boxShadow: "none",
      textAlign: "center",
      display: isVertical ? "block" : "flex",
    },
    cardMedia: {
      height: 250,
      width: 250,
      borderRadius: "15px",
      margin: "0 auto",
    },
    price: {
      fontWeight: "700",
    },
  });

const ProductCard: FC<ProductCardProps> = ({
  product,
  onaddItem,
  disabled,
  isVertical = true,
}) => {
  const styles = makeStyles(isVertical);

  const { name, image, price, description } = product;

  return (
    <Card sx={styles.card}>
      <CardMedia image={image} sx={styles.cardMedia} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box>
          <Typography variant="h6" sx={styles.price}>
            {formatPrice(price)}
          </Typography>
          <Button
            onClick={() => onaddItem(product)}
            title={disabled ? "Added to Cart" : "Add to Cart"}
            disabled={disabled}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
