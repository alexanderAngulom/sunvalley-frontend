import { Characters } from "./Characters.interface";
import { Episodes } from "./Episodes.interface";

export interface ApiResponse <T>{
    results:T
}

export interface Dataresponse {
    characters:ApiResponse<Characters[]>,
    episodes:ApiResponse<Episodes[]>;
}
