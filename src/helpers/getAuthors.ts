/**
 * A function that receives an array of authors and formats the to be displayed
 * @param authors an array of authors
 * @returns the formatted author list
 */
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
