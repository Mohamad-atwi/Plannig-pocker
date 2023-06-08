import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function StorieCard({story}) {
  return (
    <Card sx={{ height: 150,overflow: "auto", width: '70%', textAlign: 'center',
          my: 2,
          p: 1,}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {story.text}
        </Typography>   
      </CardContent>

    </Card>
  );
}
