import React from 'react'
import CardComponent from './../components/CardComponent';
import { cardData } from '../data/dummy';
import { Grid, Typography, Divider, Box } from "@mui/material";
import CalenderComponent from '../components/CalenderComponent';
import TaskCardComponent from '../components/TaskCardComponent';
import TaskCardDetail from '../components/TaskCardDetail';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Header />
      <Grid container className="home-container" spacing={4} mb={5}>
        <Grid
          className="home-title-container"
          mt={3}
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Typography className="home-title">Way to go!</Typography>
          <br />
          <Typography className="home-subtitle">
            You’ve completed your daily checkin
          </Typography>
        </Grid>

        {cardData.map((obj) => {
          return (
            <>
              <Grid item xs={6} md={3} lg={3}>
                <CardComponent
                  title={obj.title}
                  subtitle={obj.subtitle}
                  bgcolor={obj.bgcolor}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
      <Divider />
      <CalenderComponent />

      <Grid container className="home-container" spacing={4} mt={5}>
        <Grid item xs={8} md={8} lg={8}>
          <TaskCardComponent title="Very Good!" date="Today, 7:45" mb={2} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TaskCardComponent title="Very Good!" date="Today, 7:45" mb={2} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TaskCardDetail title="Very Good!" date="Today, 7:45" mb={2} />
        </Grid>
      </Grid>
      <Divider />
      <Box className="explore-text-box">
        <Link style={{textDecoration: "none"}} to="/explore">
          <Typography className="explore-text">
            Explore more on CodeGem
          </Typography>
        </Link>
      </Box>
    </>
  );
}

export default Home