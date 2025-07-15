import { User } from "../../entities/user";
import prismaClient from "../../prisma";
import { UserRepository } from "./user-repository";

export class PrismaUserRepository implements UserRepository {
    
    async create(user: User): Promise<User> {
        return prismaClient.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
    }

    async session(email: string, password: string): Promise<Partial<User>> {
        return{
            
        }
    }
    async me(user_id: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}
