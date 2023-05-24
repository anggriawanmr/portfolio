import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Three D Cloth">
      <Container>
        <Title>
          Threejs Cloth Website <Badge>2023</Badge>
        </Title>
        <P>
          The Threejs Cloth Website is a web application that utilizes
          cutting-edge technologies such as Threejs, React Three Fiber,
          TailwindCSS, Framer Motion, NodeJS, Express, Mongoose, OpenAI, and
          ReactJS to create an interactive and immersive experience for users.
          The website features a visually stunning interface that allows users
          to explore and interact with a 3D cloth simulation using Threejs, with
          React Three Fiber providing a seamless integration of Threejs with
          React. The use of TailwindCSS allows for rapid and efficient styling
          of the website, while Framer Motion adds fluid animations and
          transitions to enhance the user experience. NodeJS and Express are
          utilized for the backend, with Mongoose providing a powerful and
          flexible object data modeling framework. The integration of OpenAI
          allows for the implementation of intelligent features such as natural
          language processing and machine learning. With the combination of
          these technologies, the Threejs Cloth Website offers a unique and
          engaging experience for users, pushing the boundaries of what is
          possible in modern web development.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://threejscloth.vercel.app/">
              https://threejscloth.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>
              React, Nodejs, Express, Mongoose, TailwindCSS, Framer Motion,
              Three js
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/threecloth_01.png" alt="threecloth" />
        <WorkImage src="/images/works/threecloth_02.png" alt="threecloth" />
      </Container>
    </Layout>
  );
};

export default Work;
