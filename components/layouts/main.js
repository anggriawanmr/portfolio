import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react';

import NavBar from '../navbar';
import Footer from '../footer';
import VoxelRobotLoader from '../voxel-robot-loader';

const LazyVoxelRobot = dynamic(() => import('../voxel-robot'), {
  ssr: false,
  loading: () => <VoxelRobotLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anggriawan's homepage" />
        <meta name="author" content="Anggriawan Ridatama" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Anggriawan Ridatama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Anggriawan Ridatama" />
        <meta name="og:title" content="Anggriawan Ridatama" />
        <meta property="og:type" content="website" />
        <title>Anggriawan Ridatama - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={1}>
        <LazyVoxelRobot />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
