import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import type { ConfirmDialogProps } from ".";

export function ConfirmDialog({
  open,
  handleClose,
  handleConfirm,
  content,
  title,
}: ConfirmDialogProps) {
  return (
    <Dialog
      fullScreen={false}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          paddingTop: 0,
        }}
      >
        <Button variant="outlined" autoFocus onClick={handleClose}>
          Cancelar
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => {
            handleConfirm();
            handleClose();
          }}
          autoFocus
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
