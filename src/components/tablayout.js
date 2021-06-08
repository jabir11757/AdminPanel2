import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Table2 from './table2';
import Table1 from './table1';




const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabRoot:{
    minWidth:"50%",
    maxWidth:"50%"
  }
  
});

const Tablay =()=>{
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" style={{color:"orange", backgroundColor:"black"}}>
          <TabList onChange={handleChange} >
            <Tab label="Pending" value="1"  classes={{root:classes.tabRoot}}/>
            <Tab label="Approved" value="2"  classes={{root:classes.tabRoot}}/>
          </TabList>
        </AppBar>
        <TabPanel value="1"><Table1/></TabPanel>
        <TabPanel value="2"><Table2/></TabPanel>
      </TabContext>
    </div>
  );
}
export default Tablay;
