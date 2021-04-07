export interface IKitchenUser {
    id: number;
    password: string;
    last_login: any;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: any;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    question_one: string;
    answer_one: string;
    question_two: string;
    answer_two: string;
    groups: any;
    user_permissions: any;

}
