import { ListItemLink } from "@/components/list-item-link";
import { removeToken } from "@/utils/token";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function signOut() {
    removeToken();
    navigate("/auth/entrar");
  }

  return (
    <Drawer
      variant="permanent"
      data-joy-color-scheme="dark"
      sx={{
        width: 320,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 320,
          boxSizing: "border-box",
          backgroundColor: "#363636",
        },
      }}
    >
      <Toolbar />

      <Box
        sx={{
          overflow: "auto",
          color: "#FFF",
          "& .MuiSvgIcon-root": {
            color: "#A6A6A6",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemLink
              selected={pathname.includes("pagamentos")}
              to="/pagamentos"
            >
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Pagamentos" />
            </ListItemLink>
          </ListItem>

          <ListItem disablePadding>
            <ListItemLink selected={pathname.includes("saldos")} to="/saldos">
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Saldos" />
            </ListItemLink>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={signOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Sair da conta"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
