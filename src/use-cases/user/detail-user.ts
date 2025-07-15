import { UserRepository } from "../../repositories/user/user-repository";

export class GetUser {
    constructor(private userRepository: UserRepository) {};

    async execute(id: string) {
        const user = await this.userRepository.me(id);
        return {user};
    }
}