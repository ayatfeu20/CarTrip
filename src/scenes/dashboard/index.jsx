import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";


import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="30px">
      {/* HEADER */}
      <Box  justifyContent="space-between" alignItems="center">
        <Header title="Dash" subtitle="Status" />
        
        <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
        gridAutoRows="140px"
        gap="20px"
      >    
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{borderRadius: "10px",}}
                   
          
        >
          <Typography variant="h5" fontWeight="600" textAlign="center">
            Work Trips for past month vs private Tripspast month
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.orangeAccent[500]}
              sx={{ mt: "15px" }}
              
            >
              66%
            </Typography>
            <Typography textAlign="center">33km private - 66km business</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{borderRadius: "10px",}}
          
          
        >
          <Typography variant="h5" fontWeight="600" textAlign="center" >
            Trips today vs average Trips per day
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.orangeAccent[500]}
              sx={{ mt: "15px" }}
            >
              66%
            </Typography>
            <Typography textAlign="center">33km Trips today - 66km average/day</Typography>
          </Box>
        </Box>
     </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
