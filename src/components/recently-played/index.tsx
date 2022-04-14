import fetcher from '@/lib/fetcher';
import { Track } from '@/types/spotify/track';
import { VStack } from '@chakra-ui/react';
import useSWR from 'swr';
import TrackCard from '../track-card';

const RecentlyPlayed = () => {
  const { data } = useSWR<Track[]>('/spotify/recently-played', fetcher);

  return (
    <VStack
      w='full'
      h='full'
      align='start'
      overflowY='scroll'
      overflowX='hidden'
      py={2}
    >
      {data && data.map((track) => <TrackCard key={track.title} {...track} />)}
    </VStack>
  );
};

export default RecentlyPlayed;
