import {Branch} from '../models/branch.model'
export class Service {
    Name: string;
    Logo: string;
    Email: string;
    Description: string;
    Branches:Branch[]

    constructor(name:string, logo: string, email: string, description: string) {
        this.Name = name;
        this.Logo = logo;
        this.Email = email;
        this.Description = description;
    }
}