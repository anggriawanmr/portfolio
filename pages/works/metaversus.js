import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Dashboard">
      <Container>
        <Title>
          Metaversus <Badge>2023</Badge>
        </Title>
        <P>
          Landing Page of Metaversus contain soft and pleasent animation using
          Framer Motion, perfectly placed media queries for satisfactory
          responsiveness covering almost all devices, and Next13 application
          structure
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://metaversus-anggriawanmr.vercel.app/">
              https://metaversus-anggriawanmr.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>Nextjs, React, Tailwind, Framer Motion, React DOM</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/metaversus_01.png" alt="Metaversus" />
        <WorkImage src="/images/works/metaversus_02.png" alt="Metaversus" />
        <WorkImage src="/images/works/metaversus_03.png" alt="Metaversus" />
        <WorkImage src="/images/works/metaversus_04.png" alt="Metaversus" />
        <WorkImage src="/images/works/metaversus_05.png" alt="Metaversus" />
      </Container>
    </Layout>
  );
};

export default Work;
