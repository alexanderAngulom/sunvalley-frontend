import { Origin } from "./Origin.interface";
export interface Characters {
    id:Number,
    name:String,
    status:String,
    image:String,
    gender:String,
    species:String
    origin:Origin
    isFavorite?:Boolean
}