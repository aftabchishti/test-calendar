import React from "react";

import {
  Grid,
  Typography,
  Divider,
  Box,
  Stack,
  Card,
  IconButton,
} from "@mui/material";
import TaskCardComponent from "../components/TaskCardComponent";
import TaskCardDetail from "../components/TaskCardDetail";
import CloseIcon from "@mui/icons-material/Close";



const yellowbull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(2.5)",
      color: "#FFC74A",
    }}
  >
    •
  </Box>
);

const greenbull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(2.5)",
      color: "#76DFB4",
    }}
  >
    •
  </Box>
);
const darkgreenbull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(2.5)",
      color: "#50C388",
    }}
  >
    •
  </Box>
);

const LightCard = ({ data, color }) => {
  return (
    <>
      <Card className="light-card" sx={{border: `4px solid ${color}`}}>
        <Typography className="light-card-text">{data}</Typography>
        <IconButton className="light-card-btn" size="small" edge="start">
          <CloseIcon />
        </IconButton>
      </Card>
    </>
  );
};

const LightCard2 = ({ data, color }) => {
  return (
    <>
      <Card className="light-card2" sx={{ border: `4px solid ${color}` }}>
        <Typography className="light-card-text light-card-text2">
          {data}
        </Typography>
        <Stack direction="row" spacing={1} p={1}>
          {greenbull}
          {darkgreenbull}
          {yellowbull}
        </Stack>
      </Card>
    </>
  );
};


const LightCard3 = ({ data, color }) => {
  return (
    <>
      <Card
        className="light-card2 light-card3"
        sx={{ border: `4px solid ${color}` }}
      >
        <Typography className="light-card-text light-card-text2">
          {data}
        </Typography>
        <Stack direction="row" spacing={1} p={1}>
          {greenbull}
          {darkgreenbull}
          {yellowbull}
        </Stack>
      </Card>
    </>
  );
};

const LightCard4 = ({ data, color }) => {
  return (
    <>
      <Card
        className="light-card2 light-card4"
        sx={{ border: `4px solid ${color}` }}
      >
        <Typography className="light-card-text light-card-text2">
          {data}
        </Typography>
        <Stack direction="row" spacing={1} p={1}>
          {greenbull}
          {/* {darkgreenbull}
          {yellowbull} */}
        </Stack>
      </Card>
    </>
  );
};
const LightCard5 = ({ data, color, bgColor }) => {
  return (
    <>
      <Card
        className="light-card5"
        sx={{ border: `4px solid ${color}`, background: `${bgColor}` }}
      >
        <Typography className="light-card-text light-card-text5">
          {data}
        </Typography>
        
      </Card>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Grid container spacing={2} p={1}>
        <Grid item xs={12} md={6} lg={6}>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2} mb={1}>
              <LightCard data="21" color="#537DEF" />
              <LightCard data="21" />
              <LightCard data="21" />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                Last months Mood
              </Typography>
            </Grid>
          </Stack>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2}>
              <LightCard2 data="26" color="#537DEF" />
              <LightCard2 data="26" />
              <LightCard2 data="26" />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                Last months Mood
              </Typography>
            </Grid>
          </Stack>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2}>
              <LightCard data="21" color="#537DEF" />
              <LightCard data="21" />
              <LightCard data="21" />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                This months Mood
              </Typography>
            </Grid>
          </Stack>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2}>
              <LightCard3 data="26" color="#537DEF" />
              <LightCard3 data="26" />
              <LightCard3 data="26" />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                Last months Mood
              </Typography>
            </Grid>
          </Stack>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2}>
              <LightCard4 color="#537DEF" />
              <LightCard4 />
              <LightCard4 />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                Mood entered Today
              </Typography>
            </Grid>
          </Stack>
          <Stack component="div" direction="row" mb={2.5}>
            <Stack direction="row" spacing={2}>
              <LightCard5 data="?" bgColor="#E6EDFE" color="#537DEF" />
              <LightCard5 data="?" bgColor="#CBD8FA" />
              <LightCard5 data="?" bgColor="#E6EDFE" />
            </Stack>
            <Grid xs={12} md={6} lg={6}>
              <Typography className="month-mood-text">
                No Mood Entered Today
              </Typography>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={6} spacing={5}>
          <Stack component="div" mb={4}>
            <TaskCardComponent title="Very Good!" date="Today, 7:45" mb={6} />
          </Stack>
          <Stack component="div" mb={4}>
            <TaskCardComponent title="Very Good!" date="Today, 7:45" mb={6} />
          </Stack>
          <Stack component="div" mb={4}>
            <TaskCardComponent title="Very Good!" date="Today, 7:45" m={2} />
          </Stack>
          <Stack component="div" mb={4}>
            <TaskCardDetail title="Very Good!" date="Today, 7:45" m={2} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
