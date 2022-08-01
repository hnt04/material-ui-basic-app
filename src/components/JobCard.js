import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function JobCard({ job }) {
    return (
  <React.Fragment>
    <Box sx={{ display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'}}>
    <CardContent style={{position:'relative', backgroundColor:"#424242", marginRight:"20px", marginTop:"20px", height:"380px"}}>
      <Typography variant="h5" color="black" gutterBottom>
        <Box sx={{ display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center',
        p: 1,
        m: 1,
        paddingBottom:'20px'}}>{job.title}
        </Box> 
      </Typography>
      <Divider variant="middle" />
      <Typography contained variant="h7" component="div">
        <Box sx={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center',
        p: 1,
        m: 1,
        }}>
            <Box sx={{ border: 1, backgroundColor: "#e57373", borderRadius: 20, width: "100px", textAlign: "center"}}>
            {job.skills[0]}
            </Box>
            <Box sx={{ border: 1, backgroundColor: "#e57373", borderRadius: 20, width: "100px", textAlign: "center"}}>
            {job.skills[1]}
            </Box>
            <Box sx={{ border: 1, backgroundColor: "#e57373", borderRadius: 20, width: "100px", textAlign: "center"}}>
            {job.skills[2]}
            </Box>
        </Box>
      </Typography>
      <Typography spacing={3} variant="h7" sx={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        p: 1,
        m: 1,
        marginTop:"10px"}}>
        {job.description}
      </Typography>
    <CardActions>
        <Grid container sx={{justifyContent:'flex-start', position:'absolute', bottom:"10%", left:"30%"}}>
            <Button variant="contained" size="small" sx={{backgroundColor: "#f9a825"}}>Learn More</Button>
        </Grid>
    </CardActions>
    </CardContent>
    </Box>
  </React.Fragment>
    )
}
