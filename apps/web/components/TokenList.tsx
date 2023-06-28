import React, { useEffect, MouseEvent, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useCopyToClipboard } from "../hooks";
import { COIN_LOGO_PIFIX } from "../libs/helpers";
import { Image } from "ui";

function TokenList({ dataList }) {
  const [value, copy] = useCopyToClipboard();

  /**
   * Using the event delegation to bind the click event handler on parent instead of each child node,
   * which help to improve the performance when updating the child components
   */
  const handleDelegatedClickCopy = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      // @ts-ignore
      const addresss = event.target?.getAttribute("id");
      addresss && copy(addresss);
    },
    []
  );

  useEffect(() => {
    if (value) alert("Copy successfully!");
    // Clear the clipboard before unmounting the component
    return () => {
      copy(null);
    };
  }, [value]);

  console.log("dataList", dataList);
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody onClick={handleDelegatedClickCopy}>
        {dataList.map((row: any) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Image
                src={`${COIN_LOGO_PIFIX}${row?.token0?.symbol.toLowerCase()}`}
                alt={row?.token0?.symbol.toLowerCase()}
                size={20}
              />
              <Image
                src={`${COIN_LOGO_PIFIX}${row?.token1?.symbol.toLowerCase()}`}
                alt={row?.token0?.symbol.toLowerCase()}
                size={20}
                mr="8px"
              />

              {row.name}
            </TableCell>
            <TableCell>
              {row?.token0?.address}
              <br />
              {row?.token1?.address}
            </TableCell>
            <TableCell>
              <Button
                id={`${row?.token0?.address},${row?.token1?.address}`}
                variant="outlined"
              >
                Copy
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default React.memo(TokenList);
