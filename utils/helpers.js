export const getExcerpt = (str) => {
  let excerpt;
  if (str.length > 100) {
    excerpt = str.substring(0, 80) + '...';
  }
  return excerpt;
}
