import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Uniswap">
      <Container>
        <Title>
          Uniswap <Badge>2022</Badge>
        </Title>
        <P>
          A decentralized cryptocurrency exchange React application with
          metamask pairing, live smart contract data fetching, and most
          importantly, the ability to create your own ERC20 tokens, swap them
          and more!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://uniswap-clone-anggriawanmr.netlify.app/">
              https://uniswap-clone-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, Smart Contract, Tailwind, Cranq, Blockchains</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/uniswap_01.png" alt="Dashboard" />
        <WorkImage src="/images/works/uniswap_02.png" alt="Dashboard" />
      </Container>
    </Layout>
  );
};

export default Work;
