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
  Chip,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import imagecard from "./../Assets/img.png";
import MessageIcon from "@mui/icons-material/Message";


const Cards = ({cardTitle, icon}) => {
    return (
      <>
        <Card className="subCard-task">
          <Typography>{icon}</Typography>
          <Typography>{cardTitle}</Typography>
        </Card>
      </>
    );
}


const TaskCardDetail = ({ title, date, description }) => {
  return (
    <>
      <Card sx={{ display: "flex" }} className="task-card-detail">
        <Stack direction="row">
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
          <Box
            className="task-card-action"
            direction="row"
            sx={{ width: "10%" }}
          >
            <IconButton className="msg-icon-btn">
              <MessageIcon />
            </IconButton>
          </Box>
          <Box className="task-card-action">
            <Stack className="task-card-action" direction="row" pr={3}>
              <Cards icon="😎" cardTitle="Confident" />
              <Cards icon="😔" cardTitle="Calm" />
              <Cards icon="🤗" cardTitle="Proud" />
              <Chip label="4+" variant="outlined" />
            </Stack>
          </Box>
        </Stack>
        <Stack sx={{ background: "#F7FAFF" }} p={4}>
          <Typography className="task-detail-description">
            Awesome Feedback from Ben! Super excited to continue to work with
            him on Project X
          </Typography>
          <Stack direction="row" className="avatar-chip-span" spacing={2}>
            <span className="task-avatar-group">
              <Typography m={1}>Communication</Typography>
              <Avatar>B</Avatar>
              {/* <Chip
                sx={{ background: "#537DEF" }}
                avatar={<Avatar>M</Avatar>}
                label="Avatar"
              /> */}
            </span>
            <span className="task-avatar-group">
              <Typography m={1}>Mentorship</Typography>
              <AvatarGroup max={4}>
                <Avatar sx={{ width: "30px", height: "30px", border: "none" }}>
                  B
                </Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>M</Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>A</Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>B</Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>B</Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>B</Avatar>
                <Avatar sx={{ width: "30px", height: "30px" }}>B</Avatar>
              </AvatarGroup>
            </span>
          </Stack>
        </Stack>
      </Card>
    </>
  );
};

export default TaskCardDetail;
