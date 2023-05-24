import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Tiktok Clone">
      <Container>
        <Title>
          Tiktik <Badge>2022</Badge>
        </Title>
        <P>
          A TikTok Clone Application includes Google Auth, the ability to
          upload, publish, share, comment on, and like the videos; filtering by
          categories and advanced search functionalities, profile pages,
          suggested accounts, custom responsive design, and much more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://tiktik-application-anggriawanmr.vercel.app/">
              https://tiktik-application-anggriawanmr.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>TypeScript, React, Nextjs, Google OAuth, Sanity</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/tiktik_01.png" alt="Tiktik" />
        <WorkImage src="/images/works/tiktik_02.png" alt="Tiktik" />
      </Container>
    </Layout>
  );
};

export default Work;
