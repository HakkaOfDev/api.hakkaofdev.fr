import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children }: PageProps) => {
  return (
    <>
      <NextSeo
        title={title + ' | API'}
        description={description}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@hakkaofdev',
        }}
        openGraph={{
          url: 'https://www.hakkaofdev.fr',
          title: title + ' | Starter Kit',
          description: description,
          locale: 'en_US',
          images: [
            {
              url: 'https://www.hakkaofdev.fr/assets/images/social.png',
              width: 1200,
              height: 630,
              alt: 'Alexandre Gossard',
              type: 'image/png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://www.hakkaofdev.fr/favicon.ico',
          },
        ]}
      />
      <MotionContainer
        display='flex'
        w='100wh'
        h='100vh'
        maxW='100wh'
        overflow='hidden'
        p={{ base: 2, lg: 4 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        centerContent
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageLayout;
