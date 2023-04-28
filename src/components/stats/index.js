import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';

function Feature({ image, title, count }) {
  return (
    <Paper elevation={24} >
      <Card sx={{ display: "flex" }}>
        <Typography component='div'  variant='h3'  style={{ marginLeft:20, marginTop:1 }}>
        {image}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {count}
            </Typography>
            <Typography component='div' variant='caption'>
              {title}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  );
}

export default function Stats() {
  const theme = useTheme();
  return (
    <>
      <section>
        <Stack
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={0}
        >
             {StatsList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
        </Stack>
      </section>
    </>
  );
}


const StatsList = [
  {
    title: "Happy Clients",
    image: <InsertEmoticonIcon />,
    count: 232,
  },
  {
    title: "Projects",
    image: <AccountTreeIcon />,
    count: 521,
  },
  {
    title: "Hours Of Support",
    image: <SupportAgentIcon />,
    count: 1463,
  },
  {
    title: "Hard Workers",
    image: <GroupIcon />,
    count: 15,
  }
];
