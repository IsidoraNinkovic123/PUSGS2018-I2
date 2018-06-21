import {TypeOfVehicle} from '../models/typeOfVehicle.model'
export class Vehicle {
    Model: string;
    Manufactor: string;
    Year: number;
    Description:string;
    PricePerHour:number;
    Unavailable:boolean;
    Images:string;
    ImgArray:string[];
    TypeId:number;
    Id:number;
    BranchId:number;
   

    constructor(){}
}