import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import axios from 'axios';

function DashboardCovid() {
  const [countryCasesCount, setCountryCasesCount]= useState<Array<any>>([]);
  const getCovidData = async () => {
    const options = {
      method: 'GET',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
      headers: {
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': 'a84339c465msh0feba763967b20dp192730jsna62c73baebe9'
      }
    };
    
    const { data } = await axios.request(options);
    setCountryCasesCount(data);
  }
  useEffect(() => {
    getCovidData();

  }, []);
  return (
    <>
      <Helmet>
        <title>Covid Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance countryCasesCount={countryCasesCount} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCovid;
