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

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={5} mt={5}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
