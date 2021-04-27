const getAuthors = (authors: string[]): string => {
  let list = '';
  authors.forEach((author, index) => {
    if (index === authors.length - 1) {
      list += `${author}`;
    } else {
      list += `${author}, `;
    }
  });
  return list;
};

export default getAuthors;
