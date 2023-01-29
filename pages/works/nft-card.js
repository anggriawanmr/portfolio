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
          NFT Card Game <Badge>2022</Badge>
        </Title>
        <P>
          Online Multiplayer Web 3 NFT Card game with blockchain application and
          feature to create your character, create and join live battles,
          choosing battleground, and battle other players in-game
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://nft-card-game-anggriawanmr.netlify.app/">
              https://nft-card-game-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>Avalanche, React, Vite, Tailwind, Ethers, Hardhat</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/nft-card_01.png" alt="NFT Card Game" />
        <WorkImage src="/images/works/nft-card_02.png" alt="NFT Card Game" />
      </Container>
    </Layout>
  );
};

export default Work;
