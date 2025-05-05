import {Request, Response} from "express";

export class ExampleController {
    static async index(req: Request, res: Response) {
        try {
            res.status(200).json({status: true, message: 'Hello'});
        } catch (error: any) {
            res.status(400).send({status: false, error: error.message});
        }
    }
}
