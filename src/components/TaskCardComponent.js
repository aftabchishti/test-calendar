import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import imagecard from "./../Assets/img.png";
import MessageIcon from "@mui/icons-material/Message";
const TaskCardComponent = ({ title, date, description }) => {
  return (
    <>
      <Card sx={{ display: "flex" }} className="task-card">
        <Stack direction="row" sx={{ width: "50%" }}>
          <CardMedia
            component="img"
            sx={{
              width: 100,
              height: "100%",
            }}
            image={imagecard}
            alt="img"
          />
          <CardContent>
            <Typography className="task-card-title">{title}</Typography>
            <Typography className="task-card-subtitle">{date}</Typography>
          </CardContent>
        </Stack>
        <Box className="task-card-action" direction="row" sx={{ width: "50%" }}>
          <IconButton className="msg-icon-btn" >
            <MessageIcon />
          </IconButton>
          <Button className="task-card-btn2" variant="outlined">Quick Check In</Button>
        </Box>
      </Card>
    </>
  );
};

export default TaskCardComponent;
