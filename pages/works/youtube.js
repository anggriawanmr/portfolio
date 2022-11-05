import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Youtube Clone">
      <Container>
        <Title>
          Youtube Clone <Badge>2022</Badge>
        </Title>
        <P>
          A responsive React JS application consisting of stunning video
          sections, custom categories, channel pages, and, most importantly, you
          can play videos straight from your YouTube Clone App!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://yt-clone-anggriawanmr.netlify.app/">
              https://yt-clone-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, Material UI, Rapid API</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/youtube_01.png" alt="Youtube Clone" />
        <WorkImage src="/images/works/youtube_02.png" alt="Youtube Clone" />
      </Container>
    </Layout>
  );
};

export default Work;
