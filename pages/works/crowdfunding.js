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
          Crowdfunding <Badge>2023</Badge>
        </Title>
        <P>
          A Web3 Blockchain Crowdfunding Platform with a stunning design,
          connected to the blockchain, metamask pairing, interaction with smart
          contracts, sending Ethereum through the blockchain network, writing
          solidity code, and, most importantly, the ability to create create,
          view, and donate to crowdfunding campaigns directly through the
          blockchain
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://crowdfunding-anggriawanmr.netlify.app/">
              https://crowdfunding-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>
              Thirdweb, Hardhat, Ethers, React, React DOM, React Router DOM,
              Vite, Tailwind CSS
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/crowdfunding_01.png" alt="Crowdfunding" />
        <WorkImage src="/images/works/crowdfunding_02.png" alt="Crowdfunding" />
        <WorkImage src="/images/works/crowdfunding_03.png" alt="Crowdfunding" />
        <WorkImage src="/images/works/crowdfunding_04.png" alt="Crowdfunding" />
      </Container>
    </Layout>
  );
};

export default Work;
