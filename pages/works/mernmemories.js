import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Mern Memories">
      <Container>
        <Title>
          Mern Memories <Badge>2022</Badge>
        </Title>
        <P>
          A full-stack social media application, with email and Google
          Authentication, pagination, search and filtering capabilities,
          comments, and much more
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mernmemoriesanggriawan.netlify.app/posts">
              https://mernmemoriesanggriawan.netlify.app/posts
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, MongoDB, Express, Nodejs</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/mernmemories_01.png"
          alt="Mern Memories"
        />
        <WorkImage
          src="/images/works/mernmemories_02.png"
          alt="Mern Memories"
        />
      </Container>
    </Layout>
  );
};

export default Work;
