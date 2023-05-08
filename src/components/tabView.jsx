import { Box, Tab, Tabs, Paper } from "@mui/material";
import { useState } from "react";
import { ShowTodosList } from "./showFullList";
import ShowCompletedTodos from "./showCompleted";
import ShowTodos from "./showTodos";

export const TabView = () => {
 const [tabIndex, setTabIndex] = useState(0);

 const handleTabChange = (event, newTabIndex) => {
  setTabIndex(newTabIndex);
 };

 return (
  <Paper>
   <Box>
    <Tabs value={tabIndex} onChange={handleTabChange}>
     <Tab label="All" />
     <Tab label="ToDo" />
     <Tab label="Completed" />
    </Tabs>
   </Box>
   <Box sx={{ padding: 2, textAlign: "left" }}>
    {tabIndex === 0 && (
     <Box>
      <ShowTodosList />
     </Box>
    )}
    {tabIndex === 1 && (
     <Box>
      <ShowTodos />
     </Box>
    )}
    {tabIndex === 2 && (
     <Box>
      <ShowCompletedTodos />
     </Box>
    )}
   </Box>
  </Paper>
 );
};
