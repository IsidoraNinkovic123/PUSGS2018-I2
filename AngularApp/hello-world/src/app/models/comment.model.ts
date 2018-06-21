import {User} from '../models/user.model'
export class Comment{
    Id: number;
    Text: string;
    Date: Date;
    AppUserId: number;
    AppUser: User; 
    ServiceId: number;

    constructor(){}
}