import usePlatForms from './usePlatforms';

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatForms();
  return platforms.results.find((platform) => platform.id === id);
};

export default usePlatform;
