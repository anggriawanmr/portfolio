import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';

import Section from '../components/section';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  );
};
export default Page;
