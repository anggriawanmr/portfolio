import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../navbar';
import VoxelRobot from '../voxel-robot';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Anggriawan Ridatama - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <VoxelRobot />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
