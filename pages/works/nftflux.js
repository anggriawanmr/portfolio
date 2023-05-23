import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Crowdfunding">
      <Container>
        <Title>
          NFT Flux <Badge>2023</Badge>
        </Title>
        <P>NFT Landing Page build with WebFlow</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://nftflux-anggriawanmr.netlify.app/">
              https://nftflux-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>WebFlow</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/nftflux_01" alt="Crowdfunding" />
        <WorkImage src="/images/works/nftflux_02" alt="Crowdfunding" />
      </Container>
    </Layout>
  );
};

export default Work;
