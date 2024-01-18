import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

const getOrganizations = async () => {
  const orgs = await axios ({
    headers: {
      'Access-Control-Allow-Origin': 'true'
    },
    method: 'get',
    url: 'http://localhost:4000/orgs'
  });
  
  const { data } = orgs;

  console.dir(data);
  
};

export default function App() {
  getOrganizations();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Unicef
        </Typography>
      </Box>
    </Container>
  );
}
