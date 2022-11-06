import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Ecommerce">
      <Container>
        <Title>
          Ecommerce <Badge>2022</Badge>
        </Title>
        <P>
          An E-commerce application which include modern design and animations,
          the ability to add and edit products on the go using a Sanity, all
          advanced cart, and checkout functionalities, and most importantly, the
          complete integration with Stripe so that you can cover real payments.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ecommerce-anggriawanmr.vercel.app/">
              https://ecommerce-anggriawanmr.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stacks</Meta>
            <span>React, React Context API, Nextjs, Stripe, Sanity</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/ecommerce_01.png" alt="Ecommerce" />
        <WorkImage src="/images/works/ecommerce_02.png" alt="Ecommerce" />
      </Container>
    </Layout>
  );
};

export default Work;
