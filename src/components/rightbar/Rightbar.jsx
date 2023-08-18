import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import "./rightbar.css";

function Rightbar() {
  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "10px",
    boxShadow: "none",
    backgroundColor: "transparent",
    padding: theme.spacing(1),
    cursor: "pointer",
    textAlign: "center",
    color: "#F5EBFF",
    ":hover": { backgroundColor: "rgba(255,255,255,0.1)" },
    minWidth: 350,
  }));

  const message = `User you followed`;

  return (
    <Box
      sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}
      className="rightbarContainer"
    >
      <Stack
        justifyContent="center"
        alignItems="flex-start"
        ml="30%"
        mb="3%"
        color="white"
      >
        <Typography>Contacts</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={1}
      >
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{message}</Typography>
          </Stack>
        </Item>
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>W</Avatar>
            <Typography fontSize="14px">{message}</Typography>
          </Stack>
        </Item>
      </Stack>
    </Box>
  );
}

export default Rightbar;
