const {
  WAKATIME_CLIENT_ID: client_id,
  WAKATIME_CLIENT_SECRET: client_secret,
  WAKATIME_REFRESH_TOKEN: refresh_token,
} = process.env;

const WAKATIME_TOKEN_ENDPOINT = `https://wakatime.com/oauth/token`;
const WAKATIME_STATS_ENDPOINT = `https://wakatime.com/api/v1/users/hakkaofdev/all_time_since_today`;

const getAccessToken = async () => {
  const response = await fetch(WAKATIME_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: 'https://api.hakkaofdev.fr',
      refresh_token: refresh_token,
    }),
  });

  return response.json();
};

export const getActivity = async () => {
  const { access_token } = await getAccessToken();

  return fetch(WAKATIME_STATS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
