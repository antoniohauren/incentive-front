import type { AlertProps } from "@mui/material";

export type ToastProps = {
  handleClose: () => void;
  open: boolean;
  message: string;
  variant: AlertProps["severity"];
};
