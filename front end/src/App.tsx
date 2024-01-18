import React, { useEffect, useState, Fragment } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import axios from 'axios';

type OrgObject = {
  _id: number,
  name: String,
  number: String
};

const orgArray: Array<OrgObject> = [];

type TransactionObject = {
  _id: number,
  amount: number,
  org: String
};

const trxArray: Array<TransactionObject> = [];

const App = () => {
  const [orgs, setOrgs] = useState(orgArray);
  const [transactions, setTransactions] = useState(trxArray);

    const fetchOrgs = () => {
      useEffect(() => {
        const getOrganizations = async () => {
          const orgResponse = await axios ({
            headers: {
              'Access-Control-Allow-Origin': 'true'
            },
            method: 'get',
            url: 'http://localhost:4000/orgs'
          });
          
          const { data } = orgResponse;
          setOrgs((orgs) => [...data.data]);
        };

        const getTransactions = async () => {
          const orgResponse = await axios ({
            headers: {
              'Access-Control-Allow-Origin': 'true'
            },
            method: 'get',
            url: 'http://localhost:4000/txs'
          })
          .then(orgResponse => {
            const { data } = orgResponse;
            setTransactions((transactions) => [...data.data]);
          })
        };

        getOrganizations().catch((error) => console.log(error));
        getTransactions().catch((error) => console.log(error));
      }, []);
    }   
    

    fetchOrgs();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          UNICEF
        </Typography>
        <Grid container>
          <Grid item xs={12}
                bgcolor='#eceff1'
                border='.05rem solid #999'
                mt={2}
                borderRadius={1} 
          >
            Donate to one of these organizations
          </Grid>
          { orgs.map(org => {
              return (
                  <Grid item xs={12} key={org._id} 
                    border='.05rem solid #999'  
                    mt={2}
                    borderRadius={1} 
                  >
                    {org.name}
                  </Grid>
              )  
            })}
            { transactions.map(trx => {
              return (
                  <Grid item xs={12} key={trx._id} 
                    border='.05rem solid #999'  
                    mt={2}
                    borderRadius={1} 
                  >
                    {trx.amount}
                  </Grid>
              )  
            })}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
