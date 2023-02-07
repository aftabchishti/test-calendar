import React, {useState} from 'react'
import Calendar from "react-calendar";
import { Grid, Typography } from "@mui/material";

const CalenderComponent = () => {
    const [date, setDate] = useState(new Date());
  return (
    <>
      <Grid container pt={5} spacing={4}>
        <Grid className="calendar-container" item xs={12} md={12} lg={12}>
          <Calendar onChange={setDate} value={date} />
        </Grid>
        <Grid textAlign="center" item xs={12} md={12} lg={12}>

          <Typography className='today-date'>
            {new Date(date).toLocaleString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default CalenderComponent