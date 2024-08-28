import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, ProductListing, ShoppingCart } from "../pages";
import { ROUTES } from "./constants";
import { PageLayout } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Landing} element={<PageLayout />}>
          <Route index element={<Landing />} />
          <Route path={ROUTES.ProductListing} element={<ProductListing />} />
          <Route path={ROUTES.ShoppingCart} element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
