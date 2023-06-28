import * as React from "react";
import { Box } from "@mui/system";

interface TabPaneProps {
  tabKey: string;
  activeKey: string;
  sx?: object;
  children: React.ReactNode;
  unmountOnBlur?: boolean;
}

export default React.forwardRef<HTMLElement, TabPaneProps>(
  (props: TabPaneProps, ref) => {
    const { tabKey, sx, children, activeKey } = props;
    const active = activeKey === tabKey;

    return (
      <Box sx={{ display: active ? "block" : "none", ...sx }} ref={ref}>
        {children}
      </Box>
    );
  }
);
