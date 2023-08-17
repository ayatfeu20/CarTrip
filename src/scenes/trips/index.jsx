import { Box , Button } from "@mui/material";
import { DataGrid, GridToolbarContainer,GridToolbarColumnsButton } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTrips } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";



const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <div >
      <GridToolbarColumnsButton />
      </div>
    </GridToolbarContainer>
  );
};

const Trips = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const columns = [
    { field: "id", headerName: "ID", headerAlign: "center",
    align: "center", flex: 0.5 },
    { field: "Start", headerName: "START", type: "date", headerAlign: "center",
    align: "center", flex: 1 },
    { field: "End", headerName: "END", type:"date", headerAlign: "center",
    align: "center", flex: 1},
    {
      field: "KM",
      headerName: "KM",
      headerAlign: "center",
      align: "center",
      flex: 0.5 },
    {
      field: "privateORbusiness",
      headerName: "Private or Business",
      headerAlign: "center",
      align: "center",
      flex:1
    },
  
  ];

  return (
    <Box m="20px">
      <Header
        title="Trips"
        subtitle="Registeration number"
      />
    
     <Box sx={{ display: "flex", gap: "10px" }}>
     <div className="d-flex">
        <Button
          sx={{
            backgroundColor: colors.orangeAccent[400],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 8px",
            marginRight: "10px",
            marginTop: "10px",
                        
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Export past month
        </Button>

        <Button
          sx={{
            backgroundColor: colors.orangeAccent[400],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 37px",
            marginTop: "10px",
            
            
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Export all
        </Button>
        </div>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTrips}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          
        />
      </Box>
    </Box>
  );
};

export default Trips;
