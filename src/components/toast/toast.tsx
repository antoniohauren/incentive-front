import { Alert, Snackbar } from "@mui/material";

import type { ToastProps } from ".";

export function Toast({ handleClose, open, message, variant }: ToastProps) {
  return (
    <Snackbar open={open} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={variant}
        variant={"filled"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
