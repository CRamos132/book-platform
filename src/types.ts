interface Book {
    id: string;
    volumeInfo: {
        canonicalVolumeLink: string;
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
        subtitle?: string;
        description: string;
    }
}

export type { Book };
