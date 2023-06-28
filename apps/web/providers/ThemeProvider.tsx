import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider as T } from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <T theme={theme}>{children}</T>
    </ColorModeContext.Provider>
  );
}
