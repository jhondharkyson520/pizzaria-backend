import { User } from "../../entities/user";

export interface UserRepository {
    create(user: User): Promise<User>;
    me(user_id: string): Promise<Partial<User> | null>;
}
