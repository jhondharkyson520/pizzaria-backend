import { User } from "../../entities/user";
import prismaClient from "../../prisma";
import { UserRepository } from "./user-repository";

export class PrismaUserRepository implements UserRepository {
    async me(user_id: string): Promise<Partial<User> | null> {
        return prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,        
            }
        });
    }
    
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
}
