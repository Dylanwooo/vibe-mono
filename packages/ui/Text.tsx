import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import * as React from "react";

interface Props {
  children: ReactNode;
  [key: string]: any;
}

export default React.forwardRef<HTMLElement, Props>(
  ({ children, ...props }: Props, ref) => {
    return (
      <Typography ref={ref} variant="body1" {...props}>
        {children}
      </Typography>
    );
  }
);
