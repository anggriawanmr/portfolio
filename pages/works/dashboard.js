import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Dashboard <Badge>2022</Badge>
        </Title>
        <P>
          A Dashboard application containing Dashboard, Three Pages, Four Apps,
          and 7 Functional Charts using help of syncfusion
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dashboard-syncfus-anggriawanmr.netlify.app/">
              https://dashboard-syncfus-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, React Context API, Syncfusion</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dashboard_01.png" alt="Dashboard" />
        <WorkImage src="/images/works/dashboard_02.png" alt="Dashboard" />
      </Container>
    </Layout>
  );
};

export default Work;
