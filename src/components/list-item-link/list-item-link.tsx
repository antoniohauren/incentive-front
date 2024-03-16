import { ListItemButton as MuiListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import type { ListItemLinkProps } from ".";

export function ListItemLink({ children, ...props }: ListItemLinkProps) {
  return (
    <MuiListItemButton LinkComponent={Link} {...props}>
      {children}
    </MuiListItemButton>
  );
}
