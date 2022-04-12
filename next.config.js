const API_URLS = [
  'spotify/now-playing',
  'spotify/top-tracks',
  'spotify/recently-played',
  'stats/activity'
]

module.exports = {
  swcMinify: true,
  async rewrites() {
    return API_URLS.map((url) => (
      {  
        source: `/${url}`,
        destination: `/api/${url}`,
      }
    ));
  },
};