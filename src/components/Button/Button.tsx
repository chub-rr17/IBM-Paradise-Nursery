import { FC } from "react";
import { Typography, ButtonProps, Button as MaterialButton } from "@mui/material";
import { green } from "@mui/material/colors";

const Button: FC<ButtonProps> = ({ title, onClick, children, ...rest }) => (
  <MaterialButton
    variant="contained"
    size="large"
    onClick={onClick}
    sx={{
      borderRadius: "30px",
      backgroundColor: green[900],
      ":hover": {
        backgroundColor: green[800],
      },
      a: {
        color: "#fff",
        textDecoration: "none",
        display: 'flex'
      },
    }}
    {...rest}
  >
    {title && <Typography variant="h5">{title}</Typography>}
    {children}
  </MaterialButton>
);

export default Button;
