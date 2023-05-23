import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbnailDashboard from '../public/images/works/dashboard_01.png';
import thumbUniswapClone from '../public/images/works/uniswap_01.png';
import thumbYoutubeClone from '../public/images/works/youtube_01.png';
import thumbTiktokClone from '../public/images/works/tiktik_01.png';
import thumbEcommerce from '../public/images/works/ecommerce_01.png';
import thumbMernMemories from '../public/images/works/mernmemories_01.png';
import thumbLyriks from '../public/images/works/lyriks_02.png';
import thumbNftCard from '../public/images/works/nft-card_01.png';
import thumbMetaversus from '../public/images/works/metaversus_01.png';
import thumbCrowdfunding from '../public/images/works/crowdfunding_01.png';
import thumbOpenai from '../public/images/works/openai-clone_01.png';
import thumbDalle from '../public/images/works/dalle-clone_01.png';
import thumbRefineMERN from '../public/images/works/refine_dashboard_01.png';
import thumbThreeCloth from '../public/images/works/threecloth_01.png';
import thumbSummarizer from '../public/images/works/summarizer_01.png';
import nftThumbnail from '../public/images/works/nftflux_01.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={5} mt={5}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="nftflux"
              title="NFT Flux"
              thumbnail={nftThumbnail}
            >
              NFT Flux
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="summarizer"
              title="Summarizer"
              thumbnail={thumbSummarizer}
            >
              Article AI Summarizer
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="threecloth"
              title="Threejs Cloth Website"
              thumbnail={thumbThreeCloth}
            >
              Threejs Cloth Website
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="refine_dashboard"
              title="Refine Dashboard"
              thumbnail={thumbRefineMERN}
            >
              MERN Dashboard application
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="dalle-clone"
              title="DallE Clone"
              thumbnail={thumbDalle}
            >
              DallE Clone
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="openai-clone"
              title="OpenAI Clone"
              thumbnail={thumbOpenai}
            >
              OpenAI Clone
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="crowdfunding"
              title="Crowdfunding App"
              thumbnail={thumbCrowdfunding}
            >
              Crowdfunding Application
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="metaversus"
              title="Metaversus Landing Page"
              thumbnail={thumbMetaversus}
            >
              Metaversus Landing Page
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="nft-card"
              title="NFT Card Game"
              thumbnail={thumbNftCard}
            >
              A Web3 NFT Game
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="lyriks" title="Lyriks" thumbnail={thumbLyriks}>
              A Spotify Clone
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="dashboard"
              title="Dashboard"
              thumbnail={thumbnailDashboard}
            >
              A Dashboard application
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="uniswap"
              title="Uniswap Clone"
              thumbnail={thumbUniswapClone}
            >
              A Uniswap Clone
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="youtube"
              title="Youtube Clone"
              thumbnail={thumbYoutubeClone}
            >
              A Youtube Clone
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="tiktik"
              title="Tiktok Clone"
              thumbnail={thumbTiktokClone}
            >
              A Tiktok Clone
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="ecommerce"
              title="Ecommerce"
              thumbnail={thumbEcommerce}
            >
              An Ecommerce
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="mernmemories"
              title="Mern Memories"
              thumbnail={thumbMernMemories}
            >
              A full stack social media app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
