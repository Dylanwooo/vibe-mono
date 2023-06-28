import { Box } from "@mui/system";
import * as React from "react";

interface Props {
  src: string;
  size?: number;
  [key: string]: any;
}

export default React.forwardRef<HTMLElement, Props>(
  ({ src, size, ...props }: Props, ref) => {
    return (
      <Box
        ref={ref}
        component="img"
        src={src}
        width={size}
        height={size}
        {...props}
      />
    );
  }
);
