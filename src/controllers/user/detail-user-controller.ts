import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/user/prisma-user-repository";
import { GetUser } from "../../use-cases/user/detail-user";

const userRepository = new PrismaUserRepository;
const getUser = new GetUser(userRepository);

export const detailUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.user_id;
        if(!id) {
            return res.status(400).json({ error: 'Id is missing' });
        }
        const detailUser = await getUser.execute(id);
        if (detailUser.user !== null) {
            return res.status(200).json({ 
                message: 'User load detail successfully', 
                detailUser
            });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error: any) {
        if(error.message === 'Error load detail user.'){
            return res.status(500).json({ error: 'Error load detail user'});
        } else if(error.message === 'User not found.') {
            return res.status(500).json({ error: 'User not found.' });
        }
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
