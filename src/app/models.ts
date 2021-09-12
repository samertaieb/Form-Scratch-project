export interface Game {
    background_image:string;
    name:string;
    released:string;
    metacritic_url:string;
    website:string;
    description:string;
    metacritic:string;
    genres:Array<Genre>;
    parents_platforms:Array<ParentPlatforms>;
    publishers:Array<Publishers>;
    rating:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailer:Array<Trailer>;
}
export interface APIResponse<T>{
result:Array<T>;
}
export interface Genre{
    
}
export interface ParentPlatforms{
    platform:{
        name:string;
    }
}
export interface Publishers{
    name:string;
}
export interface Rating{
    id:number;
    count:number;
    title:string;
}
export interface Screenshots{
    image:string;
}
export interface Trailer{
    data: {
        max:string;
    };
}