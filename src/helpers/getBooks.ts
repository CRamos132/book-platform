const getBooks = (query: string): Promise<any> => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=12`)
        .then(response => response)
        .catch(error => {
            console.log(error)
            return error
        })
}

export default getBooks