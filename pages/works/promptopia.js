import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Promptopia">
      <Container>
        <Title>
          Promptopia <Badge>2023</Badge>
        </Title>
        <P>
          Fully functional website using Next.js, featuring CRUD functionality
          for prompting in AI. With the ability to create, edit, and delete
          prompts, this website demonstrates my expertise in building dynamic
          and interactive applications.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://promptopia-anggriawanmr.vercel.app/">
              https://promptopia-anggriawanmr.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>Nextjs, Google login</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/promptopia_01.png" alt="Promptopia" />
        <WorkImage src="/images/works/promptopia_02.png" alt="Promptopia" />
        <WorkImage src="/images/works/promptopia_03.png" alt="Promptopia" />
        <WorkImage src="/images/works/promptopia_04.png" alt="Promptopia" />
        <WorkImage src="/images/works/promptopia_05.png" alt="Promptopia" />
      </Container>
    </Layout>
  );
};

export default Work;
