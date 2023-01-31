import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="DallE Clone">
      <Container>
        <Title>
          DallE Clone <Badge>2023</Badge>
        </Title>
        <P>
          A DallE Clone website that can generate an art from keywords, create
          art, auto generate keywords, and searching art based on keywords.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dalle-clone-anggriawanmr.vercel.app/create-post">
              https://dalle-clone-anggriawanmr.vercel.app/create-post
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>
              React, React DOM, React Router DOM, Vite, Tailwind CSS,
              Cloudinary, Cors, Express, Mongoose, OpenAi
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dalle-clone_01.png" alt="DallE Clone" />
        <WorkImage src="/images/works/dalle-clone_02.png" alt="DallE Clone" />
      </Container>
    </Layout>
  );
};

export default Work;
