import { Box } from "@mui/material";
import Header from "../../components/Header";
import Welcome from "../../components/welcome";

const Home = () => {
  return (
    <Box m="20px">
      <Header title="Home" subtitle="Welcome to CarTrip" />
      <Box height="50vh">
        <h1>Hi, User Name</h1>
        <Welcome />
      </Box>
    </Box>
  );
};

export default Home;
