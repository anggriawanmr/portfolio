import NextLink from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

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

      <Box display={{ xs: 'flex' }} mb={10}>
        <Box flexGrow={1}></Box>
        <Heading as="h2" variant="page-title">
          Anggriawan Ridatama
        </Heading>
        <p>Web Developer and Experienced Customer Service Representative</p>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Anggriawan is Web Developer and Experienced Customer Service
          Representative, passionate on doing web design and learning full-stack
          development, currently he designing website for{' '}
          <NextLink href="https://www.wwpconstruction.com/">
            <Link>Wahana Wira Persada</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} coloraScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Malang, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed Bachelor Degree of Computer Science in BINUS University
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Worked at Keywords Studios as a Customer Service Representative
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at Wahana Wira Persada as a Web Developer
        </BioSection>
      </Section>
    </Container>
  );
};
export default Page;
