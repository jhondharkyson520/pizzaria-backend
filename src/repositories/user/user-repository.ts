import { User } from "../../entities/user";

export interface UserRepository {
    create(user: User): Promise<User>;
    session(email: string, password: string): Promise<Partial<User>>;
    me(user_id: string): Promise<User[]>;
}
