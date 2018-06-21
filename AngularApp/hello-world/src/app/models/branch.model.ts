import { MapInfo } from '../models/map-info.model';

export class Branch {
    Logo: string;
    Address: string;
    Latitude: number;
    Longitude: number;
    ServiceId:number;
    Id:number;
    MapInfo :MapInfo;

    constructor(){}
}