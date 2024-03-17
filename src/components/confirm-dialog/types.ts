export type ConfirmDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  content: string;
};
