import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Refine Dashboard">
      <Container>
        <Title>
          Refine Dashboard MERN<Badge>2023</Badge>
        </Title>
        <P>
          Full-stack MERN dashboard application with complete CRUD functionality
          on properties, authentication using Google Login, pagination, sorting,
          filtering on properties.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://refine-dashboard-client.vercel.app/">
              https://refine-dashboard-client.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>
              Refine, Material UI, Axios, React, Typescript, dotenv, Express,
              Mongoose, MongoDB, Nodejs
            </span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/refine_dashboard_01.png"
          alt="Refine Dashboard MERN"
        />
        <WorkImage
          src="/images/works/refine_dashboard_02.png"
          alt="Refine Dashboard MERN"
        />
        <WorkImage
          src="/images/works/refine_dashboard_03.png"
          alt="Refine Dashboard MERN"
        />
        <WorkImage
          src="/images/works/refine_dashboard_04.png"
          alt="Refine Dashboard MERN"
        />
        <WorkImage
          src="/images/works/refine_dashboard_05.png"
          alt="Refine Dashboard MERN"
        />
      </Container>
    </Layout>
  );
};

export default Work;
