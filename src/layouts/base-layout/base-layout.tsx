import { Header } from "@/components/header";
import { SideBar } from "@/components/side-bar";
import { Box, Stack, Typography } from "@mui/material";
import type { BaseLayoutProps } from ".";

export function BaseLayout({ children, title = "", button }: BaseLayoutProps) {
  return (
    <Box>
      <Header />
      <SideBar />
      <Box
        paddingTop={"4.4rem"}
        paddingLeft={"20.5rem"}
        paddingRight={"0.8rem"}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={"1rem"}
        >
          <Typography fontSize={"1.5rem"}>{title}</Typography>

          {button}
        </Stack>

        <Box display={"flex"} minHeight={"calc(100vh - 8.5rem)"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
