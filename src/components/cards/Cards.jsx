// CardComponent.js
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import './cards.css'

const CardComponent = ({ card }) => {
  console.log("card" , card)
  return (
    <div key={card.id}>
      
      <Tooltip title='42 songs' arrow placement="top">
      <Card className="cardsBox">
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="{card.title}"
        />
        <Box className="followBox">
          <Stack direction="row" spacing={1}>
            <Chip label={`${card.follows} follows`} className="follower" />
          </Stack>
        </Box>
        <Typography gutterBottom className="songTitle">
          {card.title}
        </Typography>
      </Card>
      </Tooltip>
    </div>
  );
};

export default CardComponent;
