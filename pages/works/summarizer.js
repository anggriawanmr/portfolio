import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Crowdfunding">
      <Container>
        <Title>
          Summarizer <Badge>2023</Badge>
        </Title>
        <P>
          Article AI Summarizer is a web application built with React and Vite,
          which utilizes the RapidAPI platform to generate summaries of long
          articles using AI technology. The project aims to simplify the process
          of extracting the main points and key details of lengthy articles for
          users who may not have the time or inclination to read the entire
          piece. By inputting a link to the article, the application utilizes
          natural language processing and machine learning algorithms to
          generate a concise and readable summary of the text.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://summarizer-anggriawanmr.netlify.app/">
              https://summarizer-anggriawanmr.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, Vite, RapidAPI, Redux Toolkit</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/summarizer_01.png" alt="Summarizer" />
        <WorkImage src="/images/works/summarizer_02.png" alt="Summarizer" />
        <WorkImage src="/images/works/summarizer_03.png" alt="Summarizer" />
      </Container>
    </Layout>
  );
};

export default Work;
