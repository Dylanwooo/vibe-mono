import * as React from "react";
import { Box } from "@mui/system";
import Tab, { ITabProps } from "./Tab";

interface Props {
  sx?: object;
  tabs: ITabProps[];
  children?: any;
}

export default React.forwardRef<HTMLElement, Props>((props: Props, ref) => {
  const { tabs, sx, children = null } = props;
  const [activeKey, setActiveKey] = React.useState("");

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", ...sx }} ref={ref}>
        {tabs.map((tab) => (
          <Tab key={tab.tabKey}  {...tab} />
        ))}
      </Box>
      {children}
    </Box>
  );
});
