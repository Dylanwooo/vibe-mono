"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { ThemeProvider } from "../providers/ThemeProvider";
import { DataProvider } from "../providers/DataProvider";
import Box from "@mui/material/Box";
import { Text, TabComponent, Tabs, TabPane } from "ui";
import { useRouter } from "next/navigation";
import TokenList from "../components/TokenList";
import UniLP from "../components/UniLP";

const tabsConfigs = [
  { key: "1", name: "Token List", value: 1, children: "111" },
  {
    key: "2",
    name: "Uniswap LP Position",
    value: 2,
    children: "111",
  },
  { key: "3", name: "Migrate", value: 3, children: "111" },
];

function PageDetail({ dataList }) {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const router = useRouter();

  const tabs = [
    { tabKey: "1", content: "Token List", value: 1 },
    { tabKey: "2", content: "Uniswap LP Position", value: 2 },
    { tabKey: "3", content: "Migrate", value: 3 },
  ];

  return (
    <ThemeProvider>
      <DataProvider>
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Header />

          <Box mx="auto" py="48px">
            {/* <TabComponent
            value={value}
            onChange={handleChange}
            configs={tabsConfigs}
          /> */}
            {/* <TokenList dataList={dataList} /> */}

            <UniLP />
          </Box>
        </Box>
      </DataProvider>
    </ThemeProvider>
  );
}

export default PageDetail;
