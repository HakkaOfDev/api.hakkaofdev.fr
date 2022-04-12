import PageLayout from '@/components/page-layout';
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { ImSphere } from '@react-icons/all-files/im/ImSphere';
import { GITHUB_PROFILE, WEBSITE } from 'src/constants';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
    >
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack spacing={2} align='start' w={{ base: '100%', md: '50%' }}>
          <Heading as='h1'>Alexandre GOSSARD</Heading>
          <Divider />
          <Text color='gray.500' align='justify'>
            Hi, welcome to my official API.
          </Text>
          <HStack
            spacing={4}
            w='full'
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link href={WEBSITE} isExternal>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<ImSphere />}
              >
                Website
              </Button>
            </Link>
            <Link href={GITHUB_PROFILE} isExternal>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<FiExternalLink />}
              >
                Github
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <Image
            src='/assets/images/home.jpg'
            h={500}
            fit='cover'
            fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={500} />}
          />
        </Center>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
