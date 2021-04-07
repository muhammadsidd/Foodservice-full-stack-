export class User {
    public id: number = 0;
    public password: string = "";
    public last_login: any = null;
    public is_superuser: boolean = false;
    public username: string = "";
    public first_name: string = "";
    public last_name: string = "";
    public email: string = "";
    public is_staff: boolean = false;
    public is_active: boolean = false;
    public date_joined: any = null;
    public phone_number: string = "";
    public address: string = "";
    public city: string = "";
    public state: string = "";
    public zip_code: string = "";
    public question_one: string = "";
    public answer_one: string = "";
    public question_two: string = "";
    public answer_two: string = "";
    public groups: any = [];
    public user_permissions: any = [];
}
