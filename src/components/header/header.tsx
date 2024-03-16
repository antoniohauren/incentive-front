import { AppBar, Avatar, Box, Typography } from "@mui/material";

export function Header() {
  return (
    <AppBar
      position="fixed"
      color={"primary"}
      sx={{
        paddingInline: 2,
        paddingBlock: 1,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize={30}>Payments</Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Avatar alt="user" src="/avatar.jpg" />
        </Box>
      </Box>
    </AppBar>
  );
}
