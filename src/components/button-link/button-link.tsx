import { Button as MuiButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ButtonProps } from ".";

export function ButtonLink(props: ButtonProps) {
  return <MuiButton LinkComponent={RouterLink} {...props} />;
}
