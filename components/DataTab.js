import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import DataTable from "./DataTable";
import PieChart from "./PieChart";
import { Paper } from "@mui/material";
import DataLineChart from "./DataLineChart";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/dataAction";
import DataBar from "./DataBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function DataTab() {
  const [value, setValue] = React.useState(0);
  const { loading, data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Charts" />
          <Tab label="Table" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Paper>{loading ? "...loading" : <PieChart data={data} />}</Paper>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper>{loading ? "...loading" : <DataBar data={data} />}</Paper>
          </Grid>
        </Grid>
        <Paper sx={{ my: 2 }}>
          {loading ? "...loading" : <DataLineChart data={data} />}
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {loading ? "...loading" : <DataTable data={data} />}
      </TabPanel>
    </Box>
  );
}
