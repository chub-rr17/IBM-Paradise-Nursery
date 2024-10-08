import { Box, Divider, Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { PRODUCTS_MOCK } from "../../data";
import { ProductCard } from "../../components/ProductCard";
import { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectProducts } from "../../store/slices/cartSlice";

const groupProductsByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    const categoryName = product.category.name;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(product);

    return acc;
  }, {} as { [key: string]: Product[] });
};

const ProductListing: FC = () => {
  const dispatch = useDispatch();

  const memoizedCategorizedProducts = useMemo(
    () => groupProductsByCategory(PRODUCTS_MOCK),
    []
  );
  const productsInCart = useSelector(selectProducts);

  const handleOnAddToCard = (product: Product) => {
    dispatch(addItem(product));
  };

  const getIsProductInCart = (id: number) =>
    productsInCart.some(({ product }) => product.id === id);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#e1dcd0",
        marginTop: "64px",
        pt: 4,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {Object.entries(memoizedCategorizedProducts).map(
          ([category, products]) => {
            return (
              <Grid>
                <Divider>
                  <Typography variant="h3">{category}</Typography>
                </Divider>
                <Grid container pt={2}>
                  {products.map((product) => (
                    <Grid xs={6} sm={4} md={3} lg={2}>
                      <ProductCard
                        product={product}
                        onaddItem={handleOnAddToCard}
                        disabled={getIsProductInCart(product.id)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default ProductListing;
