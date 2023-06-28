import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Text } from "./";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const active = value === index;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>
        <Text>{children}</Text>
      </Box>
    </Box>
  );
}

interface IConfig {
  key: string;
  name: string;
  value: number;
  children: ReactNode | string;
}
interface Props {
  value: number;
  onChange: any;
  configs: IConfig[];
}
export const TabComponent = ({ value, onChange, configs }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={onChange} aria-label="tabs">
        {configs.map((config: IConfig, idx: number) => (
          <Tab key={config.key} label={config.name} id={`tab-${idx}`} />
        ))}
      </Tabs>
      {configs.map((config: IConfig, idx: number) => (
        <TabPanel key={config.key} value={value} index={idx}>
          {config.children}
        </TabPanel>
      ))}
    </Box>
  );
};
