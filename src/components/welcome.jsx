import { Box } from "@mui/material";

const Welcome = () => {
  

  return (
    <Box  m="0" className="landing-page">
       <Box display="flex" justifyContent="center" alignItems="center" className="car-container">
                <img
                  alt="cartrip"
                  width="75%"
                  height="75%"
                  src={`../../assets/cartrip.png`}
                  style={{ cursor: "pointer", borderRadius: "10px" }}
                  className="moving-car"
                />
              </Box>
    </Box>
  );
};

export default Welcome;
