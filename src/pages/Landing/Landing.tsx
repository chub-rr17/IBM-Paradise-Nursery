import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import LandingImage from "../../assets/landing.webp";
import { green } from "@mui/material/colors";
import { ROUTES } from "../../routes/constants";
import { Link } from "react-router-dom";

// TODO: Update page
const Landing: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${LandingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 64px)",
        paddingTop: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%", margin: "auto" }}>
        <Typography variant="h1">Paradise Nursery</Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Welcome to Paradise Nursery, your ultimate destination for discovering
          the perfect plants to enhance your home and garden. Nestled in the
          heart of nature, our nursery is dedicated to providing you with a wide
          selection of high-quality, sustainably-grown plants. From vibrant
          flowers and lush foliage to exotic succulents and herbs, each plant at
          Paradise Nursery is nurtured with care and expertise, ensuring that
          you take home a piece of paradise. Explore our collection today and
          let us help you cultivate a greener, more beautiful world.
        </Typography>
        <Box sx={{ paddingTop: "40px", textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "30px",
              backgroundColor: green[900],
              ":hover": {
                backgroundColor: green[800],
              },
              a: {
                color: "#fff",
                textDecoration: "none",
              },
            }}
          >
            <Link to={ROUTES.ProductListing}>
              <Typography variant="h5">Get Started</Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
