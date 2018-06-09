import {TypeOfVehicle} from '../models/typeOfVehicle.model'
export class Vehicle {
    Model: string;
    Manufactor: string;
    Year: Date;
    Description:string;
    PricePerHour:number;
    Unavaliable:boolean;
    Images:string[];
    Type:TypeOfVehicle
   

    constructor(model:string, manufactor: string, year: Date,description:string, pricePerHour: number,images:string[],type:TypeOfVehicle) {
        this.Model = name;
        this.Manufactor = manufactor;
        this.Description = description;
        this.PricePerHour = pricePerHour;
        this.Unavaliable=false;
        this.Images=images;
        this.Type=type;
    }
}