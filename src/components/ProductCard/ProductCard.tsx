import { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button } from "../Button";
import { Product } from "../../types";
import { formatPrice, makeSxStyles } from "../../utils";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void
  isVertical?: boolean;
};

const makeStyles = (isVertical: boolean) => makeSxStyles({
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
    fontWeight: "700"
  }
})

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart, isVertical = true }) => {
  const styles = makeStyles(isVertical)

  const { name, image, price } = product;

  return (
    <Card
      sx={styles.card}
    >
      <CardMedia
        image={image}
        sx={styles.cardMedia}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6" sx={styles.price}>
          {formatPrice(price)}
        </Typography>
        <Button
          onClick={() => onAddToCart(product)}
          title="Add to Cart"
        />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
