export interface UserData {
    username: string;
    email: string;
    imageUrl: string | null;
}

export interface GoogleTokenData {
    email: string;
    name: string;
    picture: string | null
    exp: number;
}