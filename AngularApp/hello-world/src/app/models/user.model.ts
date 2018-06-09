export class User {
    FullName: string;
    Email: string;
    Birthday: Date;
    PersonalDocument: string;
    Activated: boolean;
    Password: string;
    ConfirmedPassword: string;

    constructor(fullName:string, email: string, birthday: Date, personalDocument: string, password:string, confirmedPassword: string) {
        this.FullName = fullName;
        this.Email = email;
        this.Birthday = birthday;
        this.PersonalDocument = personalDocument;
        this.Activated = false;
        this.Password = password;
        this.ConfirmedPassword = confirmedPassword;
    }
}