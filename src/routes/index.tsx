import { createBrowserRouter } from "react-router-dom";
import { Landing, ProductListing, ShoppingCart } from "../pages";

const routes = {
  landing: "/",
  productListing: "/product",
  shoppingCart: "/cart",
};

const Router = createBrowserRouter([
  {
    path: routes.landing,
    element: <Landing />,
  },
  {
    path: routes.productListing,
    element: <ProductListing />,
  },
  {
    path: routes.shoppingCart,
    element: <ShoppingCart />,
  },
]);

export default Router;
