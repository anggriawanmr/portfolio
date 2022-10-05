import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}></Box>
        <Heading as="h2" variant="page-title">
          Anggriawan Ridatama
        </Heading>
        <p>Web Developer</p>
      </Box>
    </Container>
  );
};
export default Page;
