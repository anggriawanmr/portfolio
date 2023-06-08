import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Sushi Landing Page">
      <Container>
        <Title>
          Sushi <Badge>2023</Badge>
        </Title>
        <P>
          A landing page of that embodies elegance, authenticity, and the unique
          culinary experience offered by the restaurant. The landing page is
          visually stunning, featuring enticing images of beautifully crafted
          sushi dishes that will leave visitors craving for more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://sushiman-ang.netlify.app/">
              https://sushiman-ang.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>HTML, CSS, Vite, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/sushi_01.png" alt="Sushi" />
        <WorkImage src="/images/works/sushi_02.png" alt="Sushi" />
        <WorkImage src="/images/works/sushi_03.png" alt="Sushi" />
        <WorkImage src="/images/works/sushi_04.png" alt="Sushi" />
        <WorkImage src="/images/works/sushi_05.png" alt="Sushi" />
      </Container>
    </Layout>
  );
};

export default Work;
