import * as React from "react";
import { Box } from "@mui/system";

export interface ITabProps {
  tabKey: string;
  onClick: Function;
  activeKey: string;
  content: string | Function;
  sx?: object;
  id?: string;
}

export default React.forwardRef<HTMLElement, ITabProps>(
  (props: ITabProps, ref) => {
    const { onClick, content, tabKey, activeKey, sx, id } = props;
    const active = tabKey === activeKey;

    return (
      <Box
        id={id}
        sx={sx}
        ref={ref}
        onClick={() => {
          onClick && onClick();
        }}
      >
        {typeof content === "function" ? content(active) : <Box>{content}</Box>}
      </Box>
    );
  }
);
