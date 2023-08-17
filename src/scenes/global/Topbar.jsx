import React, { useState } from "react";
import { Box, IconButton, useTheme, Popover,Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CloseIcon from "@mui/icons-material/Close";
//import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);

  const openProfilePopup = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const closeProfilePopup = () => {
    setProfileAnchorEl(null);
  };

  const openNotificationsPopup = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const closeNotificationsPopup = () => {
    setNotificationsAnchorEl(null);
  };


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          {/* <SearchIcon /> */}
        {/* </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "-8px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              4
            </div>
            <NotificationsOutlinedIcon onClick={openNotificationsPopup} />
          </div>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon onClick={openProfilePopup} />
        </IconButton>
      </Box>
   {/* Profile Pop-up */}
   <Popover
        open={Boolean(profileAnchorEl)}
        anchorEl={profileAnchorEl}
        onClose={closeProfilePopup}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          p={2}
          bgcolor={theme.palette.mode === "dark" ? theme.palette.background.paper : "white"}
          borderRadius="12px"
          width="300px"
          boxShadow={theme.shadows[5]}
          position="relative"
        >
          <IconButton
            onClick={closeProfilePopup}
            style={{ position: "absolute", top: "8px", right: "8px" }}
          >
            <CloseIcon style={{ color: "gray" }} />
          </IconButton>
          <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
            User Profile
          </Typography>
          <hr style={{ border: "1px solid lightgrey", margin: "10px 0" }} />
          <button
            className="sign-out-button"
            onClick={closeProfilePopup}
          >
            Sign Out
          </button>
        </Box>
      </Popover>

      {/* Notifications Pop-up */}
      <Popover
        open={Boolean(notificationsAnchorEl)}
        anchorEl={notificationsAnchorEl}
        onClose={closeNotificationsPopup}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          p={2}
          bgcolor={theme.palette.mode === "dark" ? theme.palette.background.paper : "white"}
          borderRadius="12px"
          width="300px"
          boxShadow={theme.shadows[1]}
          position="relative"
        >
          <IconButton
            onClick={closeNotificationsPopup}
            style={{ position: "absolute", top: "8px", right: "8px" }}
          >
            <CloseIcon style={{ color: "gray" }} />
          </IconButton>
          <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" , paddingBottom:"5git "}}>
            Notifications 
          </Typography>
          <Typography variant="h6" gutterBottom>
            Notification 1
          </Typography>
          <hr style={{ border: "1px solid lightgrey", margin: "10px 0" }} />
          <Typography variant="h6" gutterBottom>
            Notification 2
          </Typography>
          <hr style={{ border: "1px solid lightgrey", margin: "10px 0" }} />
          <Typography variant="h6" gutterBottom>
            Notification 3
          </Typography>
          <hr style={{ border: "1px solid lightgrey", margin: "10px 0" }} />
          <Typography variant="h6" gutterBottom>
            Notification 4
          </Typography>
        
        </Box>
      </Popover>
    </Box>
  );
};

export default Topbar;
