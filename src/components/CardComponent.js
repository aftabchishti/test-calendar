import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";



const CardComponent = ({bgcolor, subtitle, title}) => {
  return (
    <>
      <Card className="home-card" sx={{ background: bgcolor }}>
        <CardContent>
          <Typography className="card-subtitle">{subtitle}</Typography>
          <Typography className="card-title">{title}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardComponent