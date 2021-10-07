import { Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/styles";
import * as React from "react";

export default function ButtonAppBar() {
  const [active, setActive] = React.useState("html");
  return (
    <AppBar>
      <ButtonGroup>
        {["html", "css", "js"].map((buttonName) => (
          <Button
            key={buttonName}
            color="inherit"
            variant={active === buttonName ? "contained" : "outlined"}
            sx={{ width: "150px", height: "30px" }}
            color="primary"
            onClick={() => setActive(buttonName)}
          >
            {buttonName}
          </Button>
        ))}
      </ButtonGroup>
    </AppBar>
  );
}

const AppBar = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.background,
  boxShadow: "0 0 5px 3px rgba(0,0,0,0.3)",
}));
