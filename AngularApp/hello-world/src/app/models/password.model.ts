export class Password {
    OldPassword: string;
    NewPassword: string;
    ConformedPassword: string;
    

    constructor( oldPassword:string,newPassword:string,conformedPassword:string ) {
        this.OldPassword = oldPassword;
        this.NewPassword=newPassword;
        this.ConformedPassword=conformedPassword;
        
    }
}