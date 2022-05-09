import GlobalStats from '@/components/global-stats';
import LanguagesChart from '@/components/languages-chart';
import NowPlaying from '@/components/now-playing';
import PageLayout from '@/components/page-layout';
import ProjectsChart from '@/components/projects-chart';
import RecentlyPlayed from '@/components/recently-played';
import ThemeButton from '@/components/theme-button';
import TopTracks from '@/components/top-tracks';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { GiHealthPotion } from '@react-icons/all-files/gi/GiHealthPotion';
import { ImSphere } from '@react-icons/all-files/im/ImSphere';

const IndexPage = () => {
  return (
    <PageLayout title='Dashboard' description="Official HakkaOfDev's API">
      <VStack w='full' align='center' justify='center' py={4}>
        <HStack spacing={4}>
          <ThemeButton />
          <Heading>HAKKAOFDEV API</Heading>
        </HStack>
        <Divider />
        <Text>Welcome to my official opensource API.</Text>
      </VStack>
      <Stack direction={{ base: 'column', lg: 'row' }} w='full' spacing={2}>
        <VStack spacing={2} w={{ base: 'full', lg: '50%' }}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            Projects
          </Heading>
          <Divider />
          <ProjectsChart />
        </VStack>
        <VStack spacing={2} justify='start'>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            Global Stats
          </Heading>
          <Divider />
          <GlobalStats />
        </VStack>
        <VStack spacing={2}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            Languages
          </Heading>
          <Divider />
          <LanguagesChart />
        </VStack>
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} w='full'>
        <VStack spacing={2} w={{ base: 'full', lg: '50%' }}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            Top Tracks
          </Heading>
          <Divider />
          <TopTracks />
        </VStack>
        <VStack spacing={2} w={{ base: 'full', lg: '50%' }}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            Recently Played
          </Heading>
          <Divider />
          <RecentlyPlayed />
        </VStack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        w='full'
        mt={4}
        gap={4}
        justifyItems='center'
      >
        <NowPlaying />
        <Link href='https://www.hakkaofdev.fr' isExternal>
          <Button
            colorScheme='blue'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<ImSphere />}
          >
            My portfolio
          </Button>
        </Link>
        <Link
          href='https://www.github.com/hakkaofdev/api.hakkaofdev.fr'
          isExternal
        >
          <Button
            colorScheme='gray'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<FaGithub />}
          >
            Github Repo
          </Button>
        </Link>
        <Link href='/api/health' isExternal>
          <Button
            colorScheme='red'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<GiHealthPotion />}
          >
            API Health
          </Button>
        </Link>
      </SimpleGrid>
    </PageLayout>
  );
};

export default IndexPage;
