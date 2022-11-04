import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbnailDashboard from '../public/images/works/dashboard_01.png';
import thumbUniswapClone from '../public/images/works/uniswap-clone.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={5} mt={5}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
              id="uniswap-clone"
              title="Uniswap Clone"
              thumbnail={thumbUniswapClone}
            >
              Uniswap Clone
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
