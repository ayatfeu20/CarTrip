import React from "react";
import { Box, Button, useTheme,css } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Setting = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };


  const responsiveButtonStyle = css({
    width: "100%",
    backgroundColor: colors.orangeAccent[400],
    color: colors.grey[100],
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 10px",
    marginBottom: "10px",
    "@media (min-width: 600px)": {
      width: "40%", // Adjust as needed based on your design
      
    },
  });
  const textContainerStyle = {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <Box m="20px">
      <Header title="Setting" subtitle="Device" />

      <Box sx={containerStyle}>
        <Button sx={ responsiveButtonStyle }>Import and Configure device</Button>

        <Box sx={textContainerStyle}>
          <p>Serial Number: 156461594859</p>
          <p>FW Version: 1.01</p>
          <p>Device Manufacture: Quiclink</p>
          <p>Data Consumed: Moving</p>
          <p>Support: support@quiclink.com</p>
        </Box>

        <Button sx={ responsiveButtonStyle }>Registration Number</Button>
        <Button sx={ responsiveButtonStyle }>Email Address</Button>
      </Box>
    </Box>
  );
};

export default Setting;
