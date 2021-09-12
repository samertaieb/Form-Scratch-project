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
    publishers:Array<publishers>;
    rating:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailer:Array<Trailer>;
}
export interface APIResponse<T>{
result:Array<T>;
}
export interface parentPlatforms{
    platform:{
        name:string;
    }
}
export interface publishers{
    name:string;
}
export interface rating{
    id:number;
    count:number;
    title:string;
}
export interface screenshots{
    image:string;
}
export interface Trailer{
    data: {
        max:string;
    };
}