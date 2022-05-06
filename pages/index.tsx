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
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { GiHealthPotion } from '@react-icons/all-files/gi/GiHealthPotion';
import { ImSphere } from '@react-icons/all-files/im/ImSphere';
import NextLink from 'next/link';

const IndexPage = () => {
  return (
    <PageLayout title='Dashboard' description="Official HakkaOfDev's API">
      <Grid
        templateRows='repeat(8, 1fr)'
        templateColumns='repeat(8, 1fr)'
        gap={8}
        h='full'
        w='full'
      >
        <GridItem colSpan={8}>
          <VStack w='full' h='full' align='center' justify='center'>
            <HStack spacing={4}>
              <ThemeButton />
              <Heading>HAKKAOFDEV API</Heading>
            </HStack>
            <Divider></Divider>
            <Text>Welcome to my official opensource API.</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={4} rowSpan={3}>
          <Heading fontSize='xl' p={2}>
            Projects
          </Heading>
          <Divider />
          <ProjectsChart />
        </GridItem>
        <GridItem colSpan={2} rowSpan={6} pb={8}>
          <Heading fontSize='xl' p={2}>
            Top Tracks
          </Heading>
          <Divider />
          <TopTracks />
        </GridItem>
        <GridItem colSpan={2} rowSpan={6} pb={8}>
          <Heading fontSize='xl' p={2}>
            Recently Played
          </Heading>
          <Divider />
          <RecentlyPlayed />
        </GridItem>
        <GridItem colSpan={2} rowSpan={3} py={2}>
          <Heading fontSize='xl' p={2}>
            Global Stats
          </Heading>
          <Divider />
          <GlobalStats />
        </GridItem>
        <GridItem colSpan={2} rowSpan={3} py={2}>
          <Heading fontSize='xl' p={2}>
            Languages
          </Heading>
          <Divider />
          <LanguagesChart />
        </GridItem>
        <GridItem colSpan={2}>
          <NowPlaying />
        </GridItem>
        <GridItem colSpan={2}>
          <Flex w='full' h='full' align='center' justify='center'>
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
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex w='full' h='full' align='center' justify='center'>
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
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex w='full' h='full' align='center' justify='center'>
            <NextLink href='/api/health' passHref>
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
            </NextLink>
          </Flex>
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export default IndexPage;
