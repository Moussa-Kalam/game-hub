const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  // Get the index of the end of media/ in the url
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  // Add the measure for the cropping to the url
  return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

export default getCroppedImageUrl;
