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
          OpenAI Clone <Badge>2023</Badge>
        </Title>
        <P>
          An OpenAI Clone with user interface which resembles the chatGPT app,
          communication with advanced GPT3 model API, and most importantly, the
          ability to ask the AI for help regarding JavaScript, React, or any
          other programming language, giving it code and translating it to
          another programming language, and much more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://openai-clone-anggriawanmr.vercel.app/">
              https://openai-clone-anggriawanmr.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>JavaScript, Vite, OpenAI, Cors, Express</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/openai-clone_01.png" alt="OpenAI Clone" />
        <WorkImage src="/images/works/openai-clone_02.png" alt="OpenAI Clone" />
      </Container>
    </Layout>
  );
};

export default Work;
