import NextLink from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
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
            Representative, passionate on doing web design and learning
            full-stack development, currently he designing website for{' '}
            <Link
              href="https://www.wwpconstruction.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Wahana Wira Persada
            </Link>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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
            <BioYear>2016</BioYear>
            Worked at Keywords Studios as a Customer Service Representative
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at Wahana Wira Persada as a Web Developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/anggriawanmr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @anggriawanmr
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://twitter.com/anggriawanmr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @anggriawanmr
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.instagram.com/anggriawanmr/?hl=en"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @anggriawanmr
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
