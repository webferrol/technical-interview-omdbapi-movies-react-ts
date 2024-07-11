export interface IMovies {
    title: string;
    year: string;
    id: string;
    type: string;
    img: string;
}

export interface SearchEntity {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Query {
    Search?: (SearchEntity)[] | null;
    totalResults?: string;
    Response: string;
    Error?: string;
}
