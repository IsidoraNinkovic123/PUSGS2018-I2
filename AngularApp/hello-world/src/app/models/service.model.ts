export class Service {
    Name: string;
    Logo: string;
    Email: string;
    Description: string;

    constructor(name:string, logo: string, email: string, description: string) {
        this.Name = name;
        this.Logo = logo;
        this.Email = email;
        this.Description = description;
    }
}