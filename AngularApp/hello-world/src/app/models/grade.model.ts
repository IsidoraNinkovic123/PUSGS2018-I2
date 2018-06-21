export class Grade{
    Id: number;
    GradeNum: number;
    AppUserId: number;
    ServiceId: number;

    constructor(gradeNum:number, appUserId:number, serviceId:number)
    {
        this.GradeNum=gradeNum;
        this.AppUserId=appUserId;
        this.ServiceId=serviceId;
    }
}