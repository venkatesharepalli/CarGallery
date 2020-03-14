/**
 * getImage Function to return image based on size.
 * @param {size} string contains the photo size.
 * @param {uri} string contains the photo content.
 */
export const getImage = (size, uri) => {
  if (size === 'large') {
    return `https://${uri}_27.jpg`
  }

  return `https://${uri}_2.jpg`;
};