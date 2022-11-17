import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Ecommerce">
      <Container>
        <Title>
          Lyriks <Badge>2022</Badge>
        </Title>
        <P>
          A fully-fledged music player, search, lyrics, song exploration
          features, search, popular music around you, worldwide top charts, and
          much more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://lyriks-anggriawanmr.netlify.app/">
              https://lyriks-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, Redux Toolkit, Tailwind, RapidAPI</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/lyriks_01.png" alt="Ecommerce" />
        <WorkImage src="/images/works/lyriks_02.png" alt="Ecommerce" />
      </Container>
    </Layout>
  );
};

export default Work;
