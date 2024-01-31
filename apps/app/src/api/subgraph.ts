export const fetchSubgraph = async (query: string) => {
  const res = await fetch(
    'https://subgraph.satsuma-prod.com/75e84f5f611a/devs-team--4192614/swissdao-membership-optimism/api',
    {
      method: 'POST',
      body: JSON.stringify({ query })
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch subgraph data');
  }

  const { data } = await res.json();

  return data;
};
