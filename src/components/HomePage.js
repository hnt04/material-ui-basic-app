import React from 'react';
import { Grid } from '@mui/material';
import JobCard from './JobCard';
import { Container } from '@mui/material';
import jobs from '../jobs.json';

function HomePage() {
  return (
    <Container>
        <Grid container spacing={3} mt={1}>
        {jobs.slice(5, 10).map((job) => (
            <Grid key={job.id} xs={12} md={4} lg={4}>
                <JobCard job={job} />
            </Grid> 
        ))}
        </Grid>
      
    </Container>
  );
}

export default HomePage;
