import { Box } from '@mui/material';
import React, { ReactElement } from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Backers from './views/backers';
import Banner from './views/banner';
import Incubate from './views/incubate';
import Roadmap from './views/roadmap';

export default function Home(): ReactElement {
  return (
    <Box overflow='hidden' width='100%'>
      <Header />
      <Banner />
      <Roadmap />
      <Incubate />
      <Backers />
      <Footer />
    </Box>
  );
}
