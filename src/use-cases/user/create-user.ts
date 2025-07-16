import dotenv from "dotenv";
import { UserRepository } from "../../repositories/user/user-repository";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";
import { configEnvironment } from "../../config/config";

dotenv.config();

export class CreateUser {
    constructor(private userRepository: UserRepository) {};

    async execute(name: string, email: string, password: string) {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await this.userRepository.create({
            id: uuidv4(),
            name,
            email,
            password: hashPassword
        });
        const token = jwt.sign(
            {id: user.id, email: user.email},
            configEnvironment.jwtSecret,
            {expiresIn: "30d"}
        );

        return {user, token}
    }
}
