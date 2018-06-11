export class Branch {
    Logo: string;
    Address: string;
    Latitude: number;
    Longitude: number;
    ServiceId:number;

    constructor( logo: string, address: string, latitude: number, longitude: number,serviceId:number) {
        this.Logo = logo;
        this.Address = address;
        this.Latitude = latitude;
        this.Longitude=longitude;
        this.ServiceId=serviceId;
    }
}