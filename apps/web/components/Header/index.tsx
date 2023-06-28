import React, { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../providers/ThemeProvider";
import { DataContext } from "../../providers/DataProvider";
import Wallet from "./Wallet";

function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const dataStore = useContext(DataContext);

  return (
    <Box
      px="16px"
      py="12px"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Wallet />
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "light" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default React.memo(Header);
